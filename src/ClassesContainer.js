import React from 'react';
import ClassDetails from "./ClassDetails"

function ClassesContainer({ classes }){

    const classesComponents = classes.map(c => {
      return(
        <ClassDetails 
        key={c.id}
        c={c}
      />
      )
    })

    return(
        <ul className="cards">
        {classesComponents} 
      </ul>
    )
}

export default ClassesContainer