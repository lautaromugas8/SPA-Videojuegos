import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Detail from "./components/Detail/Detail";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllGames } from "./redux/actions/gamesActions";
import AddGameForm from "./components/Add/AddGameForm";
import { getAllGenres } from "./redux/actions/genresActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGames());
    dispatch(getAllGenres());
  }, [dispatch]);

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
