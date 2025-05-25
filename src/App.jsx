import './App.css'
import TodoTitle from './components/TodoTitle.jsx'
import Todo from './components/Todo.jsx'
import Popup from './components/Popup.jsx'
import { useState } from 'react'
import Counter from './components/Counter.jsx'
import ItemAdder from './components/ItemAdder.jsx'
import TodoList from './components/TodoList.jsx'

function App() {
  const [popupOpen, setPopupOpen] = useState(false)
  return (
    <>
      <TodoList />
      <ItemAdder />
      <Counter />
      <TodoTitle />
      <div>
        <input type="text" onChange={event => console.log(event.target.value)} />
        <button onClick={() => setPopupOpen(!popupOpen)}>Add to do</button>
      </div>
      <Todo task="Learn React" description="Code along and take notes" />
      <Todo task="Finish ASAP course" description="To get better understanding" />
      <Todo task="Do 3 guided projects" description="To upgrade your skills" />
      <Todo task="Do 1 solo project" description="To see how well you`ll get" />
      {popupOpen && <Popup question="Are you sure you want to close it?" popupOpen={popupOpen} setPopupOpen={setPopupOpen} />}
    </>
  )
}

export default App
