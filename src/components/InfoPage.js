import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'

    function Search(props) {
            useEffect(() => {
                fetchData()
            }, [])
            
    
        const [ books, setBooks ] = useState([])
        const id = props.match.params.id
        const fetchData = async () => {
            const url = `https://www.googleapis.com/books/v1/volumes?q=${id}`;
            const rawData = await fetch(url)
            const book = await rawData.json()

            console.log(book.items)
            setBooks(book.items)
        } 

    return(
        <div className='page'>
        <button><Link to='/'><FaRegArrowAltCircleLeft className='backButton' /></Link></button>
        <div className='infoPage'>    
            <div className='infoPageData'>
                <div className='infoImage'>
                    {books[0] ? <img src={books[0].volumeInfo.imageLinks.thumbnail} alt='' /> : ''}
                </div>
                <div className='infoData'>
                    <p><b>Title:</b> {books[0] ? books[0].volumeInfo.title : ''} <br/></p>
                    <p><b>Author:</b> {books[0] ? books[0].volumeInfo.authors[0] : ''} <br/></p>
                    <p><b>Published date:</b> {books[0] ? books[0].volumeInfo.publishedDate : ''} <br/></p>
                    <p>Click {books[0] ? <a href={books[0].volumeInfo.previewLink}>here</a> : ''} for a preview</p>
                </div>       
            </div>
        </div>
        </div>
    )
}

export default Search