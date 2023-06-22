import DisplayText from './components/DisplayText';
import { useState } from 'react'

function App() {
  //contains all the items
  const [items,addNewItems] = useState([]);
  //contains new item to be added
  const [newItem,setNewItem] = useState("");

  const clearItem = (params) => {
    setNewItem("");
  }

  const addItem = (params) => {
    addNewItems([...items,newItem]);
    clearItem();
  }
  
  const updateItem = (params) => {
    setNewItem(params.target.value);
  }
  

  return (
    <>
      <div className="container">
        <div className='input-group my-5 d-flex'>
          <input type="text" className="form-control col-8" onChange={updateItem} value={newItem}/>
          <button type="button" className="btn btn-primary col-2" onClick={addItem}>Add item</button>
        </div>

        <div>
          <DisplayText items={items}/>
        </div>
      </div>
    </>
  );
}

export default App;
