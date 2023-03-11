import CharactersItem from "../CharactersItem";
import { CharactersListWrapper } from "./CharactersList.styled";

const CharactersList = ({ characters }) => {
  return (
    <>
      <CharactersListWrapper>
        {characters.map(({ id, name, species, image }) => {
          return (
            <CharactersItem
              key={id}
              id={id}
              name={name}
              species={species}
              image={image}
            />
          );
        })}
      </CharactersListWrapper>
    </>
  );
};

export default CharactersList;
