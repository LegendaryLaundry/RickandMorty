import React from 'react'

const CharacterItem = ( {item} ) => {
    return (
        <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={item.img} alt='' />
          </div>
          <div className='card-back'>
            <h1>{item.name}</h1>
            <ul>
              <li>
                <strong>Name:</strong> {item.name}
              </li>
              <li>
                <strong>Status:</strong> {item.status}
              </li>
              <li>
                <strong>Species:</strong> {item.species}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

export default CharacterItem
