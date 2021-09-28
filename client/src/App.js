import "./App.css";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home">
          <Nav />
          <Home />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
