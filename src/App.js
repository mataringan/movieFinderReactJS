import logo from "./assets/img/favicon.png";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Movie from "./components/Movie/Movie";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import { getMovies } from "./api";

const App = () => {
  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMovies("man").then((res) => setMovies(res.data.Search));
  }, []);

  return (
    <div className="app_container">
      <Header title="MovieFinder" logo={logo} />
      <Search setMovies={setMovies} setLoading={setLoading} />
      <Movie movies={movies} loading={loading} />
      <hr />

      <Footer />
    </div>
  );
};

export default App;
