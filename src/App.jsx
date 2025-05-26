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
  function NewTodo() {
    return <Todo task="aaaaaaa" setPopupOpen={setPopupOpen} />
  }
  function closePopup() {
    setPopupOpen(false)
  }
  return (
    <>
      <TodoList />
      <ItemAdder />
      <Counter />
      <TodoTitle />
      <div>
        <input type="text" onChange={event => console.log(event.target.value)} />
        <button onClick={() => setPopupOpen(prevPopup => (!prevPopup))}>Add to do</button>
      </div>
      { NewTodo() }
        
      <Todo task="Learn React" setPopupOpen={setPopupOpen} />
      <Todo task="Finish ASAP course" setPopupOpen={setPopupOpen} />
      <Todo task="Do 3 guided projects" setPopupOpen={setPopupOpen} />
      <Todo task="Do 1 solo project" setPopupOpen={setPopupOpen} />
      {popupOpen && <Popup question="Are you sure you want to close it?" setPopupOpen={setPopupOpen} closePopup={closePopup}/>}
    </>
  )
}

export default App
