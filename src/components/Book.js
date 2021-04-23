import React from 'react'
import { Link } from  'react-router-dom'

const Book = ({id, volumeInfo}) => {
    const Photo = volumeInfo.imageLinks ? 
                  volumeInfo.imageLinks.thumbnail : 
                  'https://images.unsplash.com/photo-1547413749-3e0c1ba70695?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
    
    return (
        <div className='bookContainer'>
            <Link to={`/infopage/${id}`} className='link'>
                <img className='bookImg' src={Photo} alt={volumeInfo.title} />
                <div className='bookInfo'>
                    <h1 className='bookTitle'>{volumeInfo.title}</h1>
                    <p className='bookAuthor'>{volumeInfo.authors ? volumeInfo.authors[0] : volumeInfo.publisher}</p>
                </div> 
            </Link>
        </div>
    )
}

export default Book