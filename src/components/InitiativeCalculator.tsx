import React, { useEffect } from "react";
import CharacterList from "./CharacterList";
import { Character } from "../models/Character";
import { List } from "immutable";
import { getCookie, setCookie } from "../helpers/cookieHelper";
import InitiativeList from "./InitiativeList";
import { Grid } from "@mui/material";

export function InitiativeCalculator() {
  const [characters, setCharacters] = React.useState<List<Character>>(List());

  useEffect(() => {
    const characters: Character[] = getCookie("characters");
    setCharacters(List(characters));
  }, []);

  function addCharacter(name: string, bonus: number) {
    const newCharacters = characters.push(new Character(name, bonus));
    setCookie("characters", newCharacters);
    setCharacters(newCharacters);
  }

  function removeCharacter(i: number) {
    const newCharacters = characters.remove(i);
    setCookie("characters", newCharacters);
    setCharacters(newCharacters);
  }

  return (
    <>
      <Grid container sx={{ placeItems: "center", alignSelf: "center" }}>
        <Grid size={6} sx={{ display: "flex", justifyContent: "center" }}>
          <CharacterList
            characterList={characters}
            addCharacter={addCharacter}
            removeCharacter={removeCharacter}
          />
        </Grid>

        <Grid size={6} sx={{ display: "flex", justifyContent: "center" }}>
          <InitiativeList characterList={characters} />
        </Grid>
      </Grid>
    </>
  );
}
