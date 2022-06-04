import './App.css';
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import NGO from './components/NGO/ngo.js';
import Landing from './components/Landing/landing';
function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/ngo" component={withRouter(NGO)}/>
            
        </Switch>
      </Router>
    </div>
  );
}

export default App;
