"use client"
import React, {Component} from 'react';
import Home from "@/app/page";

class Page extends Component {

    state={
        counter:0,
        timer:0,
    }

    componentDidMount() { //sayfa yüklendiğinde bir kere çalışır
        console.log("component çalıştı");
        this.myTimer=setInterval(()=>{
            this.setState({timer:this.state.timer+1})
        },1000);
    }

    //componentDidUpdate(prevProps, prevState, snapshot) { //component render edildiğinde çalışır
      //  console.log("component yenilendi");
    //}
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.timer)
        if(prevState.counter!==this.state.counter){
            console.log("component yeniden render edildi");
        }
    }


    componentWillUnmount() { //temizlik yapar
        clearInterval(this.myTimer)
    }


    increase=()=>{
        this.setState({counter:this.state.counter+1})
    }
    render() {
        return (
            <div>
                <Home></Home>
                <h2>useEffect class component</h2>
                <p>counter: {this.state.counter}</p>
                <button onClick={()=>this.increase()}>increase</button>
            </div>
        );
    }
}

export default Page;