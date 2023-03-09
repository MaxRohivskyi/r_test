import axios from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

export const fetchCharacter = async () => {
  const response = await axios.get(`/character`);
  return response;
};

export const fetchCharacterById = async (id) => {
  const response = await axios.get(`/character/${id}`);
  return response;
};
