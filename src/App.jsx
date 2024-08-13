import React from 'react'
import Person from './Components/Person'
import Button from './Components/Button'
import Header from './Components/Header'
import List from './Components/List'
import List02 from './Components/List02'
import Todos from './Components/Todos'

function App() {
  const myItem = ['a','b','c','d']
  return (
    <div>
      <Header title={"WalkThrough with React01"} />
      <Person name="Shekhawat Hussain" age="23" />
      <Person name="Shahadat Hussain" age="20" />
      <Button text="Click me" onClick={()=>{alert("hello!")}}  />
      <List02 items={myItem}/>
      <Todos />
    </div>
  )
}

export default App