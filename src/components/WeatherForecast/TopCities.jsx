import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';


const TopCities = () => {
    const cities= [
        {
            id:1,
            title: 'London'
        },
        {
            id:2,
            title: 'Delhi'
        },
        {
            id:3,
            title: 'Toronto'
        },
        {
            id:4,
            title: 'Melbourne'
        },
        {
            id:5,
            title: 'Punjab'
        },

    ]
  return (
    <>  
        <div className='top-cities-wrapper  text-center '>
                {cities.map((city)=>(             
                    <MDBBtn 
                        key={city.id}
                        rounded 
                        className=' top-cities-buttons' 
                    >
                        {city.title}
                    </MDBBtn>
                ))}   
        </div>    
    </>
  )
}

export default TopCities