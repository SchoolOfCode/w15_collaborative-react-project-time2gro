import React from 'react'

export default function SearchCard(props) {
    return (
        
          <div className='card'>
          <div className='card-body'>
        <h5 className='card-title'>About</h5>
        <p className='card-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quo
          tempore, enim sunt repudiandae aspernatur amet ad saepe quod commodi.
          Quisquam sint eaque asperiores repellat perspiciatis accusantium eius,
          ratione fugit.
        </p>
        <input onChange={props.handleSearch}></input>
        <button>Search</button>
      </div>
    </div> 
     
    )
}
