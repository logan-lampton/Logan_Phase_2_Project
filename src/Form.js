import React from 'react';

function Form({ addClass }){

    function handleAddClass(event){
        event.preventDefault()
        fetch("http://localhost:3000/classes", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: event.target.name.value,
                image: event.target.image.value,
                role: event.target.role.value,
                spellcasting: event.target.spellcasting.value,
                hit_dice: event.target.hit_dice.value,
                interests: event.target.interests.value,
                description: event.target.description.value
            })
        })
        .then(response => response.json())
        .then(newClass => addClass(newClass))
    }

    return(
        <div>
            <form onSubmit={handleAddClass}>
                <div>
                    <input type="text" name="name" placeholder="Name" className="form"/>
                    <input type="text" name="image" placeholder="Image" className="form" />
                    <input type="text" name="role" placeholder="Role" className="form" />
                    <input type="text" name="spellcasting" placeholder="Spellcasting" className="form" />
                    <input type="text" name="hit_dice" placeholder="Hit Dice" className="form" />
                    <input type="text" name="interests" placeholder="Interests" className="form" />
                    <input type="text" name="description" placeholder="Description" className="form" />
                </div>
                <button type="submit" className="form">Add Your Class!</button>
            </form>
        </div>
    )
}

export default Form