import React from "react"

function Navbar(){
    return(
        <div>
            <ul className="nav-bar">
                <li><a href="/filter">Search by your interests</a></li>
                <li><a href="/form">Add a Class</a></li>
                <li><a href="/">Show me the full list again</a></li>
            </ul>
        </div>
    )
}

export default Navbar