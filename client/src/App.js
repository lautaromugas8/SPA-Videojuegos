import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
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
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/home"
          element={
            <>
              <Nav />
              <Home />
            </>
          }
        />
        <Route
          path="/home/add"
          element={
            <>
              <Nav />
              <AddGameForm />
            </>
          }
        />
        <Route
          path="/home/game/:id"
          element={
            <>
              <Nav />
              <Detail />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
