"use client"
import React, {Component} from 'react';

class Page extends Component {

    state={
        counter:0,
    }

    increase=()=>{
        this.setState({counter:this.state.counter+1})
}
    render() {
        return (
            <div>
                <h2>class component</h2>
                <p>counter: {this.state.counter}</p>
                <button onClick={()=>this.increase()}>increase</button>
            </div>
        );
    }
}

export default Page;