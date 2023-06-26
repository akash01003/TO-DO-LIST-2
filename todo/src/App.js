import { useState } from 'react';
import './App.css';
import InputArea from './components/InputArea';
import ToDoItem from './components/ToDoItem';

function App() {
  const [items, setItems] = useState([]);

  const addItems = (inputText) => {
    setItems((prev) => {
      return [...prev, inputText]
    }) 
   }
  console.log(items);

  const deleteItem = (id) => {
    setItems((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div className="container">
      <div className="heading">
    <h1>TO-DO List</h1>
      </div>

      <InputArea addItems = {addItems} setItems={setItems} items={items} />

      <div>
        <ul>
          {
            items.map((item, index)=>{
                return (
                  <ToDoItem text={item} key={index} deleteItem={deleteItem} id={index}/>
                )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
