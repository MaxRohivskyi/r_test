import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Searchbar from "../../components/Searchbar";
import CharactersList from "../../components/CharactersList";
import Banner from "../../components/Banner";
import Loader from "../../components/Loader";
import NotFound from "../../components/NotFound";
import { HomeContainer } from "./Home.styled";

import { fetchCharacters } from "../../services/rickandmorty-api";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

const Home = () => {
  const location = useLocation();

  const [characters, setCharacters] = useState([]);
  const [status, setStatus] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({});
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    async function fetch() {
      try {
        setStatus(Status.PENDING);
        const characters = await fetchCharacters(query);

        if (characters.length > 0) {
          const filteredCharacters = characters.filter((character) =>
            character.name.toLowerCase().includes(query.toLowerCase())
          );

          const sortedCharacters = filteredCharacters.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          setCharacters(sortedCharacters);
          setStatus(Status.RESOLVED);
        } else {
          setStatus(Status.REJECTED);
          toast.error("Something broke, please try again");
        }
      } catch (error) {
        setStatus(Status.REJECTED);
        console.log(error.message);
        toast.error("Something broke, please try again");
      }
    }
    fetch();
  }, [query]);

  const handleInputChange = (value) => {
    let query = value;
    if (query) {
      setSearchParams({ query });
    } else {
      setSearchParams({});
    }
  };

  return (
    <HomeContainer>
      <Banner />
      <Searchbar
        handleInputChange={handleInputChange}
        characters={characters}
      />
      {status === "pending" && <Loader />}
      {status === "resolved" && (
        <CharactersList characters={characters} location={location} to={""} />
      )}
      {status === "rejected" && <NotFound />}
    </HomeContainer>
  );
};

export default Home;
