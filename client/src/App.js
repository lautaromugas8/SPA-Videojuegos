import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Detail from "./components/Detail/Detail";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllGames } from "./redux/actions";
import AddGameForm from "./components/Add/AddGameForm";
import axios from "axios";

function App() {
  console.log("app.js rendered");
  const dispatch = useDispatch();

  async function getAllGenres() {
    await axios.get("http://localhost:3001/genres");
    console.log("genres fetched");
  }

  useEffect(() => {
    dispatch(getAllGames());
    console.log("fetching games");
    getAllGenres();
  });

  return (
    <div className="App">
      <Switch>
        <Route path="/home/add">
          <Nav />
          <AddGameForm />
        </Route>
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
