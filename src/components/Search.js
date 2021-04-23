import React, { useState } from 'react'
import Book from './Book'
import { BiSearchAlt2 } from 'react-icons/bi'

const API_KEY = process.env.REACT_APP_API_KEY

const Search = () => {
    const [ books, setBooks ] = useState([]) 
    const [ searchTerm, setSearchTerm ] = useState('')
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${API_KEY}`;
  
    const handleOnSubmit = (e) => {
      e.preventDefault();
      if(searchTerm) {
        fetch(url)
          .then(res => res.json())
          .then(data => {
            console.log(data.items)
            setBooks(data.items)
          })
  
        setSearchTerm('')
        }
    }
  
    const handleOnChange = (e) => {
      setSearchTerm(e.target.value)
    }

    return(
        <>
        <header>
          <h3>Book Searcher</h3>
          <form onSubmit={handleOnSubmit}>
              <BiSearchAlt2 className='searchLogo' onClick={handleOnSubmit}/>
            <input 
              className='search'               
              type='text' 
              placeholder='Search a book' 
              autoFocus={true}
              value={searchTerm}
              onChange={handleOnChange}
            /> 
          </form>
        </header>
        
          <div className='home'>
            {books ? books.map(book =>
              <Book key={book.id} {...book} />
            ) : <p className='noResults'>No results, search again</p>}
          </div>
        </>
    )
}

export default Search