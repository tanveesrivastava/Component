import {Component} from "react";
import Child from "./child";
class Parent extends Component{
 
    render(){
        let myname="Developed by Tanvee" 
        return ( <div>
            <h1>Hello from Parent Component</h1>
            <Child me={myname}/>

        </div> );
    }
}

 
export default Parent;
