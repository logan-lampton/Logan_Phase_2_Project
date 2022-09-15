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
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="image" placeholder="Image" />
                    <input type="text" name="role" placeholder="Role"/>
                    <input type="text" name="spellcasting" placeholder="Spellcasting"/>
                    <input type="text" name="hit_dice" placeholder="Hit Dice"/>
                    <input type="text" name="interests" placeholder="Interests"/>
                    <input type="text" name="description" placeholder="Description"/>
                </div>
                <button type="submit">Add Your Class!</button>
            </form>
        </div>
    )
}

export default Form