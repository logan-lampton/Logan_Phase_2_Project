import React, { useState } from 'react';

function Filter({ filterBar }){

    const [searchTerm, setSearchTerm] = useState("")

    function handleType(event){
        setSearchTerm(event.target.value)
        filterBar(event.target.value)
    }

    return(
      <div className="search">
        <input type="text" className="searchTerm" value={searchTerm} onChange={handleType}/>
      </div>
    )
}

export default Filter