import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  CardWrapper,
  CardLink,
  CardImage,
  CardInfo,
  Name,
  Specie,
} from "./CharactersItem.styled";

const CharactersItem = ({ id, name, species, image }) => {
  const location = useLocation();

  return (
    <CardWrapper>
      <CardLink to={`/character/${id}`} state={{ from: location }}>
        <CardImage src={image} />
        <CardInfo>
          <Name>{name}</Name>
          <Specie>{species}</Specie>
        </CardInfo>
      </CardLink>
    </CardWrapper>
  );
};

export default CharactersItem;

CharactersItem.propTypes = {
  characters: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
  }),
};
