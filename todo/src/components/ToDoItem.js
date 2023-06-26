import React from 'react'

const ToDoItem = ({text,deleteItem,id}) => {
  return (
    <div onClick={() => {deleteItem(id)}}>
      <li>{text}</li>
    </div>
  )
}
export default ToDoItem
