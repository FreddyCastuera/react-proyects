import './App.css';
import React, {Component} from 'react';
import Form from './Components/Form'
import Table from './Components/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
/*
  crear un semaforo en react (separado por componentes)
  guardar en un input usuario y correo 
  y mostrar en una tabla.
*/

class UsersList extends Component{
  constructor(){
    super()
    this.state={
      users:[{name:"jorge",email:"freddycastuera@gmail.com"}],
      name:"",
      email:""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);

  }
  handleChange(event){
    const {name,value} = event.target;
    this.setState({[name]:value});
  }
  handleClick(event){
    const {users,name,email} = this.state;
    if(name && email){
      this.setState({users:[...users,{name,email}]});
    }
    event.preventDefault()
  }
  handleDeleteClick(event){
    const {id} = event.target;
    const newUsers = this.state.users.filter((item,index)=> index!==parseInt(id));
    this.setState({users:newUsers});
  }

  render(){
    return (
      <div className="d-flex align-items-start">
        <Table users = {this.state.users} handleDeleteClick={this.handleDeleteClick}/>
        <Form  name={this.state.name} email={this.state.email} handleChange={this.handleChange} handleClick={this.handleClick}/>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <UsersList  />
    </div>
  );
}

export default App;
