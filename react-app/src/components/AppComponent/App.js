import './App.css';
import React from "react";
import Clock from "../ClockComponent/Clock";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Clock />
      </div>
    );
  }
}

export default App;
