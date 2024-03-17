import axios from "axios";
import React, { useEffect, useState } from "react";


function BooksStore() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);


    const fetchBooks = async () => {
        const response = await axios.get('https://booksstore-10.onrender.com/books');
        console.log(response.data);
        setBooks(response.data);
        setLoading(false);
    };

    useEffect(() => {
        fetchBooks();
    }, []);
    return (
        <div className="bg-red-100 border-black" style={{ height: '200px', width: '400px' }} >








        </div>
    );
}

export default BooksStore;