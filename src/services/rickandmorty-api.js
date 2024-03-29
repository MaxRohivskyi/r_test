import axios from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async () => {
  const response = await axios.get(`/character`);
  return response.data.results;
};

export const fetchCharacterById = async (id) => {
  const response = await axios.get(`/character/${id}`);
  return response.data;
};
