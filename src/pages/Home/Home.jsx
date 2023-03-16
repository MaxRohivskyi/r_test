import { useFetchAllCharacters } from "../../hooks/useFetchAllCharacters";
import Searchbar from "../../components/Searchbar";
import CharactersList from "../../components/CharactersList";
import Banner from "../../components/Banner";
import Loader from "../../components/Loader";
import NotFound from "../../components/NotFound";
import { HomeContainer } from "./Home.styled";

const Home = () => {
  const { characters, filteredCharacters, status, query, handleInputChange } =
    useFetchAllCharacters();

  return (
    <HomeContainer>
      <Banner />
      <Searchbar handleInputChange={handleInputChange} />
      {status === "pending" && <Loader />}

      {status === "resolved" && !query ? (
        <CharactersList characters={characters} />
      ) : filteredCharacters.length > 0 ? (
        <CharactersList characters={filteredCharacters} />
      ) : (
        <NotFound />
      )}

      {status === "rejected" && <NotFound />}
    </HomeContainer>
  );
};

export default Home;
