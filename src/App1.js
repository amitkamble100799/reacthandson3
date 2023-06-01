import { Component } from "react";
import './App.css'

class Nextpage extends Component {
  render() {
    return (
      <>
        <div className='box1'>
        {this.props.value.map((item)=>{
          return(      
            <table className='item'> 
            <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Rating</th>
            </tr>
            <tr>
           <td>{item.name} </td> 
           <td>{item.department} </td>
           <td>  {item.rating}</td>
            </tr>
            </table>   
            )  
          })      
          }
        </div>
        <button  className='btn2' onClick={this.props.render}>GO BACK</button>
        </>
    )
  }
}
export default Nextpage;