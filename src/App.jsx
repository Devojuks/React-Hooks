import { useState, useEffect, useCallback } from "react";
import AddMovie from "./components/AddMovie";
import "./App.css";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

const info = [
  {
    title: "The Black Book",
    img: "https://tinyurl.com/56pke263",
    description:
      "After his son is framed for a kidnapping, a bereaved deacon takes justice into his own hands and fights a corrupt police gang to absolve him.",
    posterURL: "www.blackbook.com",
    rating: 9.6,
  },
  {
    title: "John Wick",
    img: "https://tinyurl.com/ytzkubfc",
    description:
      "When a gangster's son steals his car and kills his dog, fearless ex-hit man John Wick takes on the entire mob to get his revenge.",
    posterURL: "www.cosmos.com",
    rating: 9.3,
  },
  {
    title: "Cosmos",
    img: "https://tinyurl.com/3rrctb46",
    description:
      "An exploration of our discovery of the laws of nature and coordinates in space and time.",
    posterURL: "www.cosmos.com",
    rating: 9.3,
  },
  {
    title: "Prison Break",
    img: "https://tinyurl.com/3uzu5ucr",
    description:
      "An innocent man is imprisoned and sentenced to death, and his only hope now is in his younger brother, who commits a crime in order to send himself to prison and devises a plan for their escape together.",
    posterURL: "www.prisonbreak.com",
    rating: 8.3,
  },

  {
    title: "The Walking Dead",
    img: "https://tinyurl.com/ycyrfxkz",
    description:
      "Police officer (Rick) wakes up from a coma in which he was in for several months as a result of being shot while on the job, to find that the world has been ravaged by the zombies and he is the only survivor.",
    posterURL: "www.thewalkingdead.com",
    rating: 8.2,
  },
  {
    title: "The Roman Empire",
    img: "https://tinyurl.com/ypp6fc6c",
    description:
      "Chronicles some of the most famous leaders of the Roman Civilization.",
    posterURL: "www.romanempire.com",
    rating: 6.9,
  },
];

function App() {
  const [list, setList] = useState(info);
  const [filtredList, setFiltredList] = useState(list);
  const [rate, setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  const filter = useCallback(
    (key, rate) => {
      setKeyword(key);
      setRate(rate);
      console.log(rate + "  " + key);
      setFiltredList(
        list.filter((element) => {
          return (
            element.title.toLowerCase().includes(key.toLowerCase()) &&
            element.rating >= rate
          );
        })
      );
    },
    [list, setKeyword, setRate]
  );

  useEffect(() => {
    filter(keyword, rate);
  }, [filter, keyword, rate]);

  function adding(movie) {
    if (movie.title && movie.img && movie.description && movie.posterURL) {
      setList((prevList) => [...prevList, movie]);
    }
  }

  return (
    <div className="App">
      <Filter filter={filter} />
      <MovieList list={filtredList} />
      <AddMovie adding={adding} />
    </div>
  );
}

export default App;
