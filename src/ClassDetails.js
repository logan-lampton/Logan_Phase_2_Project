import React from 'react';

function ClassDetails({ c }){

    const {name, image, role, hit_dice, interests, description, spellcasting} = c

    return (
        <>
          <li className="cards__item">
            <div className="card">
              <img
                src={image}
                alt={name}
                className="card__image"
              />
              <div className="card__content">
                <div className="card__title">
                {name}
                </div>
                <p className="card__text">
                  Role: {role}
                  <br/>
                  Spellcasting Abilities: {spellcasting}
                </p>
                <div>
                  <p>
                  {hit_dice} Hit Dice
                  </p>
                  <p>Description: {description}</p>
                  <br/>
                  <p>Interests: {interests}</p>
                </div>

              </div>
            </div>
          </li>
        </>
      );

}

export default ClassDetails