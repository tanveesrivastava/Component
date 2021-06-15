import React,{Component} from 'react'
import ReactDOM from 'react-dom';
import Parent from './components/parent';

class MainApp extends Component{
  render(){
    return <div>
              <h1>Main Application</h1>               
              <Parent/> 
          </div>
  }
}
ReactDOM.render(<MainApp/>,
  document.getElementById('root')
);