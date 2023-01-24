import { Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'

// import './App.css';
import FormData from './LoginForm'
import MyGarage from './MyGarage';
import Bicycles from './Bicycles';
import BikePartsForm from './BikePartsForm';


function App() {
  return (
    <div>
      <MyGarage />
      <Switch>
        <Route path="/bicycles">
          <Bicycles />
        </Route>
      </Switch>


      <BikePartsForm/>
    </div>
  );
}

export default App;
