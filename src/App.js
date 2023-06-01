import './App.css';
import React, { Component } from 'react'
import Nextpage from './App1';

export default class App extends Component {

  
  state={
    name:"",
    department:"",
    rating:"",
    click: true,
    data:[]
  }
  
  handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
    this.setState({[event.target.department]:event.target.value})
    this.setState({[event.target.rating]:event.target.value})
  }

  changePage = ()=>{
    this.setState({click: !this.state.click})
  }

  handleClick=()=>{
    const obj={
      name:this.state.name,
      department:this.state.department,
      rating:this.state.rating
    }
    this.state.data.push(obj);
    this.setState({data:this.state.data, click:false, name:"",department:"",rating:""})
  }


  render() {
    return (


    <>
    {this.state.click?
    
      <>
      <div className='txt'>
     <h1 className='head'>EMPLOYEE FEEDBACK FORM</h1>
    
      <div className='dt'>
      <label className='name'> Name :</label><input className='box' type="text" name="name" onChange={this.handleChange} value={this.state.name}/> 
      </div>

      <div className='dt' >
      <label className='dpt'>  Department :</label><input className='box' type="text" name="department" onChange={this.handleChange} value={this.state.department}/>
      </div>

      <div className='dt'>
      <label className='rt'>  Rating :</label><input className='box' type="number" name="rating" onChange={this.handleChange} value={this.state.rating}/>
      </div>
 </div>
    <button className='btn1' onClick={this.handleClick}>Submit</button>
</>
    :
    <Nextpage value={this.state.data} render={this.changePage}/>
  }
  </>    
    )
  }
}

