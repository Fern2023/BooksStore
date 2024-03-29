import jwt from 'jsonwebtoken';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

const verifyToken = asyncHandler(async (req, res, next) => {


  const authorization = req.cookies.token;
  if (!authorization) throw new ErrorResponse('Please login');
  const decoded = jwt.verify(authorization, process.env.JWT_SECRET);

  req.uid = decoded.uid;
  next();
});

export default verifyToken;
