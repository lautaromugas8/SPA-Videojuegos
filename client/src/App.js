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
import MobileNav from "./components/MobileNav/MobileNav";

const mq = window.matchMedia("(max-width: 425px)");

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
              {mq.matches ? <MobileNav /> : <Nav />}
              <Home />
            </>
          }
        />
        <Route
          path="/home/add"
          element={
            <>
              {mq.matches ? <MobileNav /> : <Nav />}
              <AddGameForm />
            </>
          }
        />
        <Route
          path="/home/game/:id"
          element={
            <>
              {mq.matches ? <MobileNav /> : <Nav />}
              <Detail />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
