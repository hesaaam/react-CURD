import React, { useState } from 'react';
import AddPeople from './components/AddPeople';
import List from "./components/List";


export interface IPerson {
  id: number;
  fullName: string;
  age: number;
  url: string;
  bio?: string;
}

let users= [
  {id:1, fullName:"امیر حسام جلیلی", age:28,
   url:"https://ddtkey.com/assets/img/profile.png",
  bio:"Front-end developer"
  }
]
const App = () => {
  const [peoples, setPeoples] = useState<IPerson[]>(users);

  return (
    <div className='container'>

      <h4 className='alert alert-info'>مدیریت اشخاص</h4>
      <List peoples={peoples} setPeoples={setPeoples}/>
      <AddPeople peoples={peoples} setPeoples={setPeoples} />
       
    </div>
  )
}

export default App
