import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';

const initialTeam = [
  { id: uuid(), name: 'Tyler Biswell', profession: 'TL' },
  { id: uuid(), name: 'Juan Chosen One', profession: 'Jedi' },
]



function App() {
  const [members, setMembers] = useState(initialTeam)
  const [formValues , setFormValues] = useState({
    name: '',
    profession:'',
  })

  const onInputChange = event =>{
    const inputThatChanged = event.target.name
    const newValueForInput = event.target.value
    setFormValues({
      ...formValues,
      [inputThatChanged]:newValueForInput,
    })
  }
  const onFormSubmit = event =>{
    event.preventDefault()
    const newMember = {
      id :uuid(),
      name: formValues.name,
      profession: formValues.profession,
    }
    setMembers([...members, newMember])
  }
  

 


  return (
    
    <div className="App">
      <Form
      onInputChange={onInputChange}
      formValues={formValues}
      onFormSubmit={onFormSubmit}
      />

      <h2>List Of Team Members:</h2>
      {
        members.map(m => <div key={m.id}>{m.name} {m.profession}</div>)
      
      }
    </div>
  );
}



function Form(props){
  return (
    <form onSubmit={props.onFormSubmit}>
      <label> Name
        <input
        onChange = {props.onInputChange}
        value={props.formValues.name}
        name='name'
        type='text'
        />

      </label> <br/>

      <label> Profession
        <input
        onChange = {props.onInputChange}
        value={props.formValues.profession}
        name='profession'
        type='text'
        />

      </label> <br/>
      <input type='submit'/>
    </form>
  )
}

export default App;
