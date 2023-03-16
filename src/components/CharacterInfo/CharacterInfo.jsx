import PropTypes from "prop-types";
import {
  CharacterInfoWrapper,
  CharacterInfoHeader,
  CharacterInfoImg,
  CharacterTitle,
  CharacterInfoTitle,
  CharacterInfoList,
  CharacterInfoItem,
  CharacterInfoItemTitle,
  CharacterInfoItemText,
  CharacterInfoBorderLine,
} from "./CharacterInfo.styled";

const CharacterInfo = ({ character }) => {
  const { image, name, gender, status, species, origin, type } = character;

  return (
    <CharacterInfoWrapper>
      <CharacterInfoHeader>
        <CharacterInfoImg src={image} alt={name} />
        <CharacterTitle>{name}</CharacterTitle>
      </CharacterInfoHeader>
      <CharacterInfoTitle>Informations</CharacterInfoTitle>

      <CharacterInfoList>
        <CharacterInfoItem>
          <CharacterInfoItemTitle>Gender</CharacterInfoItemTitle>
          <CharacterInfoItemText>{gender}</CharacterInfoItemText>
          <CharacterInfoBorderLine />
        </CharacterInfoItem>

        <CharacterInfoItem>
          <CharacterInfoItemTitle>Status</CharacterInfoItemTitle>
          <CharacterInfoItemText>{status}</CharacterInfoItemText>
          <CharacterInfoBorderLine />
        </CharacterInfoItem>

        <CharacterInfoItem>
          <CharacterInfoItemTitle>Specie</CharacterInfoItemTitle>
          <CharacterInfoItemText>{species}</CharacterInfoItemText>
          <CharacterInfoBorderLine />
        </CharacterInfoItem>

        <CharacterInfoItem>
          <CharacterInfoItemTitle>Origin</CharacterInfoItemTitle>
          <CharacterInfoItemText>{origin.name}</CharacterInfoItemText>
          <CharacterInfoBorderLine />
        </CharacterInfoItem>

        <CharacterInfoItem>
          <CharacterInfoItemTitle>Type</CharacterInfoItemTitle>
          <CharacterInfoItemText>
            {type === "" ? "unknown" : type}
          </CharacterInfoItemText>
          <CharacterInfoBorderLine />
        </CharacterInfoItem>
      </CharacterInfoList>
    </CharacterInfoWrapper>
  );
};

export default CharacterInfo;

CharacterInfo.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    origin: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
  }),
};
