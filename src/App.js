import './index.css';
import React, {useState, useEffect} from "react"
import { Route, NavLink, Switch } from "react-router-dom"
import Navbar from "./Navbar"
import ClassesContainer from "./ClassesContainer"
import Filter from './Filter'
import Home from "./Home"
import Form from "./Form"


function App() {
  
  const [classes, setClasses] = useState([])
  const [filteredClasses, setFilteredClasses] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/classes")
    .then(response => response.json())
    .then(data => {
      setClasses(data)
      setFilteredClasses(data)
    })
  }, [])
  
  function filterBar(searchTerm){
    if(searchTerm === ""){
      setFilteredClasses(classes)
    }else{
      setFilteredClasses(classes.filter(c => {
        return( 
          c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
          c.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.hit_dice.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.spellcasting.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.interests.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }))
    }
  }

  function addClass(newClass){
    const newClassesArray = [...classes, newClass]
    setFilteredClasses(newClassesArray)
  }

  return (
    <div>
      <header id="main-header" className="centered">
          <h1>Your Next Adventurer</h1>
          {/* <h1>Choose Your Class</h1> */}
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/filter">
            <Filter filterBar={filterBar}/>
        </Route>
        <Route exact path="/form">
          <Form addClass={addClass}/>
        </Route>
        <Route path="*">
          <h1>404: Page Not Found!</h1>
        </Route>
      </Switch>
      <Navbar />
      <ClassesContainer classes={filteredClasses} className="centered" />
      {/* route for each class is a possibility (could use params) */}
    </div>
  );
}

export default App;
