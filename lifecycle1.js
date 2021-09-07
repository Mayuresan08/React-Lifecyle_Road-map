import React from "react";  

class Lifecycle extends React.Component
{
    constructor(props)
    {console.log("in Constructor",props.id)
        super(props)
        this.state={counter:0}
        
    }
    componentDidMount()
    {
        console.log("in ComponentDidMount")
    }
    handleClick=(val)=>{
        console.log(val)
       if(val==="+") this.setState((prevState)=>{return{counter:prevState.counter+1}})
       else if(val==="-") this.setState((prevState)=>{return{counter:prevState.counter-1}})
       else this.setState({counter:0})
    }
    shouldComponentUpdate()
    { console.log("in shouldComponentUpdate")
        return true
    }
    componentDidUpdate(){
        console.log("in ComponentDidUpdate")
    }
    componentWillUnmount()
    {
        console.log("in componentWillUnmount")
    }
    render()
    {
        console.log("in render",this.props.id)
        return(
            <>
            <h1>Child component</h1>
            <h2>Counter :{this.state.counter}</h2>

            {/* passing arguments via arrow function */}
            <button onClick={()=>this.handleClick("+")}>Increment</button>

            {/* passing arguments via bind() */}
            <button onClick={this.handleClick.bind(this,"-")}>Decrement</button>

            <button onClick={()=>this.handleClick("")}>Reset</button>
            <button onClick={()=>this.forceUpdate()}>forceUpdate()</button>
            </>
        )
    }
}

export default Lifecycle
