import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { fetchCharacterById } from "../services/rickandmorty-api";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export const useFetchCharactersById = () => {
  const [character, setCharacter] = useState();
  const [status, setStatus] = useState("");
  const { characterId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        setStatus(Status.PENDING);
        const character = await fetchCharacterById(characterId);

        setCharacter(character);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
        console.log(error.message);
        toast.error("Something broke, please try again!");
      }
    };
    fetch();
  }, [characterId]);

  return { character, status };
};
