import "./App.css";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Detail from "./components/Detail/Detail";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home/game/:id">
          <Nav />
          <Detail />
        </Route>
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
