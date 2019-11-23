import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { smurfList } from '../actions/smurfList';
import "./App.css";

function App(props) {

  useEffect(() => {
    props.smurfList();
  }, []);
  
  console.log(props);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
    </div>
  );
}


function mapStateToProps(state) {
  return {
    smurfs: state.smurfs
  }
}

const mapDispatchToProps = {
  smurfList
}

export default connect(mapStateToProps, mapDispatchToProps)(App); 
