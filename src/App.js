
import './App.css';
import Records from './data.json'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {
        Records.map( record => {
          return(
            <div className='box'>
              <strong>UserID: </strong>  {record.userId}<br/>
              <strong>ID: </strong> {record.id}<br/>
              <strong>Title: </strong> {record.title}<br/>
              <strong>Body: </strong> {record.body}<br/>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
