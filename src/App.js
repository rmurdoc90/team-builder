import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';

const initialTeam = [
  { id: uuid(), fname: 'Tyler', lname: 'Biswell' },
  { id: uuid(), fname: 'Juan', lname: 'Chosen One' },
]



function App() {
  const [members, setMembers] = useState(initialTeam)
  const [formValues , SetFormValues] = useState({
    fname: '',
    lname:'',
  })


  return (
    <div className="App">
      <header className="App-header">
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// function Form(props){
//   return 
// }

export default App;
