import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Lifecycle from './lifecycle1'

class Main extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={
      id:0,
    show:true}
  }
  render()
  {
    return(
      <>
      <h1>Parent Component</h1>
      <h2>ID:{this.state.id}</h2>
      <button onClick={()=>{this.setState({id:this.state.id+1})}}>Change ID</button>
      <button onClick={()=>{this.setState({show:(!this.state.show)})}}>Show/Hide child Component</button>
      {this.state.show? <Lifecycle id={this.state.id}/>:<></>}
      {/*</Lifecycle> */}
      </>
    )
  }
}



ReactDOM.render(
    <Main/>,
  document.getElementById('root')
);



