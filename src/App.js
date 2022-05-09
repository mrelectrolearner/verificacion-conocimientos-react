import { useState } from "react";
import UserTable from "./components/userTable"
import {v4 as uuidv4} from 'uuid'
function App() {
  const userData=[
    {id:uuidv4(),name: 'Tania', username:'floppy'},
    {id:uuidv4(), name: 'Craig', username:'sil'},
    {id:uuidv4(), name: 'Ben', username:'benis'}
  ]
  //state
  const[users,setUsers]=useState(userData)
  return (
    <div className="container">
      <h1>CRUD app with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
         <h2>Add user</h2> 
        </div>
        
        <div className="flex-large">
                <h2>View users</h2>
                <UserTable users={users}/>
        </div>
      </div>
     
    
    </div>
   
  );
}

export default App;
