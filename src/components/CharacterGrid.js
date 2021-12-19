import React from 'react';


const CharacterGrid = ({items, isLoading}) => {
    console.log(items)
    const { results = [] } = items;
    return isLoading ? (
    <h1>Loading...</h1>
    ) : (
    <section className="cards">
        {results.map((result) => {
            const { id, name, image, status, species } = result;
            return (
                <div className="card">
                <div className='card-inner'>
                <div className='card-front'>
              
                <img src={image} alt={id}/>
    
                </div>
                <div className='card-back'>
                <h1>{ name }</h1>
                <ul>
                <li>
                     <strong>Name:</strong> { name }
                   </li>
                   <li>
                     <strong>Status:</strong> { status }
                   </li>
                   <li>
                     <strong>Species:</strong> { species }
                   </li>
                 
                </ul>
                </div>
                </div>
                </div>
            )
        //     <div className='card'>
        //     <div className='card-inner'>
        //       <div className='card-front'>
        //         <img src={item.img} alt='' />
        //       </div>
        //       <div className='card-back'>
        //         <h1>{item.name}</h1>
        //         <ul>
        //           <li>
        //             <strong>Name:</strong> {item.name}
        //           </li>
        //           <li>
        //             <strong>Status:</strong> {item.status}
        //           </li>
        //           <li>
        //             <strong>Species:</strong> {item.species}
        //           </li>
        //         </ul>
        //       </div>
        //     </div>
        //   </div>
})}
    </section>
    )
}

export default CharacterGrid
