import User from '../models/User.js';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signUp = asyncHandler(async (req, res, next) => {

  const { firstName, lastName, username, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser)
    throw new ErrorResponse('An account with this Email already exists', 409);

  const hash = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    firstName,
    lastName,
    username,
    email,
    password: hash,
  });
  const token = jwt.sign({ uid: newUser._id }, process.env.JWT_SECRET);

  res.status(201).send({ token });
});


export const signIn = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email }).select('+password');
  if (!existingUser) throw new ErrorResponse('User does not exist', 404);

  const match = await bcrypt.compare(password, existingUser.password);
  if (!match) throw new ErrorResponse('Pasword is incorrect', 401);

  const token = jwt.sign({ uid: existingUser._id }, process.env.JWT_SECRET, {
    expiresIn: '30m',
  });
  res.cookie('token', token, { maxAge: 1800000 });
  res.send({ token });
});


export const getUser = asyncHandler(async (req, res, next) => {


  const user = await User.findById(req.uid);
  res.json(user);
});


export const logout = asyncHandler(async (req, res, next) => {
  res.clearCookie('token');
  res.send({ status: 'success' });
});
