import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NGO from './components/ngo.js';
function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
          <Route path="/ngo">
            <NGO />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
