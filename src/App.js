import { Route, Switch } from 'react-router-dom'
// import { useEffect, useState } from 'react'




// import './App.css';
// import FormData from './LoginForm'
import MyGarage from './MyGarage';
import Bicycles from './Bicycles';
import LoginForm from './LoginForm';
// import BikePartsForm from './BikePartsForm';
// import NewBikeForm from './NewBikeForm';



function App() {
  return (
    <div>
      Welcome to GarageDoor - what will you find?

      <LoginForm />
      <MyGarage />
      <Switch>
        <Route path="/bicycles">
          <Bicycles />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
