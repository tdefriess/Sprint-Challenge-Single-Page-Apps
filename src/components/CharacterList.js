import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    Axios
      .get("https://rickandmortyapi.com/api/character")
      .then(response => {
        console.log(response);
        const characterList = response.data.results;
        setCharacters(characterList);
      })
      .catch(err => {
        console.log("The data was not returned", err);
      })
  }, []);

  return (
    <section className="character-list">
      <SearchForm characters={characters} setCharacters={setCharacters} />
      {characters.map(character => {
        return <CharacterCard key={character.id} character={character}/>
      })}
    </section>
  );
}
