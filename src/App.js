import TextAria from './TextAria'
import DisplayAria from './DisplayAria'
import AddButton from './AddButton'
import { useState } from 'react'

function App() {
  const [todoitems,updateTodoItems] = useState([]);
  const [newitem,setNewItem] = useState("");
  const [color,setcolor] = useState(true);

  const changecolor=()=>{
    setcolor(!color);
  }
  const handleText=(event)=>{
    setNewItem(event.target.value);
  }
  const Additems=()=>{
    // if([...todoitems]!==[]){
    if(newitem==="" || newitem===null){
      // console.log(newitem+"/");
    }else{
      updateTodoItems([...todoitems,newitem])
    }
    setNewItem("");
  }

  // const EmptyBox=()=>{
  //   setNewItem("")
  // }
  return (
    <div className='container'>
      <div className="form-floating mt-5 input-group">
        <TextAria handleText={handleText} newitem={newitem} />
        <AddButton Additems={Additems}/>
      </div>
      <DisplayAria data={todoitems} color={color} changecolor={changecolor}/>
    </div>
  );
}

export default App;
