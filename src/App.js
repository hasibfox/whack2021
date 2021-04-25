import './App.css';
import Navbar from './Components/navbar-folder/Navbar'
import Home from './Components/hero-folder/Home'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Checkout from './Components/checkout-folder/Checkout';
import SubmitSignIn from './Components/login/signup-folder/SubmitSignIn';
import SubmitSignUp from './Components/login/signup-folder/SubmitSignUp';
import { Donation } from './Components/donation-folder/Donation';
import Login_firebase from './Login_firebase';


function App() {
  return (
    <div className="app">
      <Router>

        <Switch>
          <Route path="/checkout">
          <Navbar/>
          <Checkout />
          </Route>
            <Route path="/sign-in">
            <SubmitSignIn />
          </Route>
          <Route path="/sign-up">
            <SubmitSignUp />
          </Route>
          <Route path="/donation">
          <Navbar/>

            <Donation />
          </Route>
          <Route path="/login">
  <Login_firebase />
</Route>
          <Route path="/">
          <Navbar/>
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
  }
  export default App;