import React from 'react'
import Footer from './footer'
import AddTodo from './addTodo'
import VisibleTodoList from './visibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App