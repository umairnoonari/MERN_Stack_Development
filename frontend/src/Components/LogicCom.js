import React from 'react'
import {useState} from 'react'
const LogicCom=function(WrappedComponent){
    const WithCounter=(props)=>{
        const [count,setCount]=useState(0)
        function increment()
        {
            setCount(count+1)
        }
        function decrement()
        {
            setCount(count-1)
        }
        return <WrappedComponent increment={increment} decrement={decrement} count={count}></WrappedComponent>
    }
    return WithCounter
    // const withCounter=class NewComponent extends React.Component{
    //     constructor(props)
    //     {
    //         super(props)
    //         this.state={count:0}
    //     }
    //     increment()
    //     {
    //         this.setState((prev)=>({count:prev+1}))
    //     }
    //     render()
    //     {
    //         return<>
    //             <WrappedComponent increment={this.increment.bind(this)} count={this.state.count}></WrappedComponent>
    //         </>
    //     }
    // }
    // return withCounter
}
export default LogicCom