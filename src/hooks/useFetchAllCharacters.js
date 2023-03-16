import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

import { fetchCharacters } from "../services/rickandmorty-api";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export const useFetchAllCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [status, setStatus] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({});
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    const fetch = async () => {
      try {
        setStatus(Status.PENDING);
        const characters = await fetchCharacters();

        if (characters.length > 0) {
          const sortedCharacters = characters.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          setCharacters(sortedCharacters);
          setStatus(Status.RESOLVED);
        }
      } catch (error) {
        setStatus(Status.REJECTED);
        console.log(error.message);
        toast.error("Something broke, please try again!");
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    if (query) {
      const filteredCharacters = characters
        .filter((character) =>
          character.name.toLowerCase().includes(query.toLowerCase())
        )
        .sort((a, b) => a.name.localeCompare(b.name));

      setFilteredCharacters(filteredCharacters);
      if (filteredCharacters.length > 0) {
        toast.success("Hooray, we found some interesting characters");
        setStatus(Status.RESOLVED);
      } else {
        toast.warning(
          "You entered an incorrect character name, please try again!"
        );
      }
    }
  }, [query, characters]);

  const handleInputChange = (value) => {
    let query = value;
    if (query) {
      setSearchParams({ query });
    } else {
      setSearchParams({});
    }
  };

  return { characters, filteredCharacters, query, status, handleInputChange };
};
