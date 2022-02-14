import './App.css';
import { Header } from './component/Header';
import { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect

} from 'react-router-dom'
import { Login } from './component/Login';
import { SignUp } from './component/SignUp';

function App() {
  return (
    <Fragment>

      <Router>
        <Header />
        <Switch>

          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>


      </Router>

    </Fragment >
  );
}

export default App;
