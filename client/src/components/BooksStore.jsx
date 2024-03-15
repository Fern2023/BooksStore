import axios from "axios";
import React, { useEffect, useState } from "react";


function BooksStore() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);


    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:4000/books');
        console.log(response.data);
        setBooks(response.data);
        setLoading(false);
    };

    useEffect(() => {
        fetchBooks();
    }, []);
    return (
        <div >

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="flex flex-col  items-center bg-zinc-800 border-4 rounded-2xl m-8">

                    {books.map((book, index) => (

                        <div key={index} className="flex flax-row  bg-gray-300  m-8 shadow-xl  rounded-2xl" style={{ width: '1200px' }}>
                            <div className="flex-1 flex flex-col items-center">
                                <p className="p-8 font-bold  ">{book.name}</p>
                                <p className="m-4 text-center" style={{ transform: 'scalex(1)', fontFamily: 'Alex Brush, cursive' }}>{book.tags[0]}</p>
                            </div>

                            <div className="flex-1 flex justify-center items-center">
                                <img src={book.image_url} alt={book.name} style={{ width: '250px' }} className=" rounded-2xl" /></div>
                        </div>

                    ))}</div>
            )}







        </div>
    );
}

export default BooksStore;