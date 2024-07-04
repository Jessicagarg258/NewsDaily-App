import React from 'react'

const Newsitem=(props)=>{
   
  
     let {title,description,imageurl,newsurl,author,date,source} =props;
    return (
      <div className='my-3'>
        <div className="card" >
          <div style={{display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'
          }}>
          <span className=' bagde rounded-pill bg-danger' >{source}</span>
          </div>
       
                <img src={!imageurl?"https://media.assettype.com/bloombergquint%2F2024-06%2Fec6aecd2-6791-4c9b-9d4d-75a26261cb5c%2FExterior_view_of_New_SEBI_signage__logo_at_office_building_in_BKC__Bandra_Kurla_Complex___Source_Vij.jpeg?rect=0%2C35%2C506%2C266&w=1200&auto=format%2Ccompress&ogImage=true":imageurl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> {title}..</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</p>
                    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
      </div>
    )
  
}

export default Newsitem



// 8621ea2a2bd64ac6a6caeefcb228e316