import { useFetchCharactersById } from "../../hooks/useFetchCharactersById";
import CharacterInfo from "../../components/CharacterInfo";
import BtnGoBack from "../../components/BtnGoBack";
import Loader from "../../components/Loader";
import NotFound from "../../components/NotFound";
import { CharacterDetailsContainer } from "./CharacterDetails.styled";

const CharacterDetails = () => {
  const { character, status } = useFetchCharactersById();
  return (
    <CharacterDetailsContainer>
      {status === "pending" && <Loader />}

      {status === "resolved" && (
        <>
          <BtnGoBack />
          <CharacterInfo character={character} />
        </>
      )}

      {status === "rejected" && <NotFound />}
    </CharacterDetailsContainer>
  );
};

export default CharacterDetails;
