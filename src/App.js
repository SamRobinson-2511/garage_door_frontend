import { Route, Switch } from 'react-router-dom'
// import { useEffect, useState } from 'react'
import LandingPage from './LandingPage';




// import './App.css';
// import FormData from './LoginForm'
import MyGarage from './MyGarage';
import Bicycles from './Bicycles';

// import BikePartsForm from './BikePartsForm';
// import NewBikeForm from './NewBikeForm';



function App() {
  return (
    <div>
      this text is in App.js
      <LandingPage />
      
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
