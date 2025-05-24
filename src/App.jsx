import './App.css'
import TodoTitle from './components/TodoTitle.jsx'
import Todo from './components/Todo.jsx'
import Popup from './components/Popup.jsx'

function App() {
  return (
    <>
      <TodoTitle />
      <Todo task="Learn React" description="Code along and take notes"/>
      <Todo task="Finish ASAP course" description="To get better understanding"/>
      <Todo task="Do 3 guided projects" description="To upgrade your skills"/>
      <Todo task="Do 1 solo project" description="To see how well you`ll get"/>
      <Popup question="Are you sure you want to close it?"/>
    </>
  )
}

export default App
