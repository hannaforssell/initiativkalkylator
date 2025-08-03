import {
  Box,
  Button,
  List as MuiList,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import React from "react";
import { Character } from "../models/Character";
import { toSignedString } from "../helpers/numberHelper";
import CloseIcon from "@mui/icons-material/Close";
import { List } from "immutable";

interface ICharacterList {
  characterList: List<Character>;
  addCharacter: (name: string, bonus: number) => void;
  removeCharacter: (i: number) => void;
}

function CharacterList(props: ICharacterList) {
  const [inputName, setInputName] = React.useState<string | undefined>();
  const [inputBonus, setInputBonus] = React.useState<string | undefined>();

  return (
    <Box>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="input-name"
          label="Namn"
          variant="standard"
          value={inputName || ""}
          onChange={(e) => setInputName(e.target.value)}
        />
        <TextField
          id="input-bonus"
          label="IB"
          variant="standard"
          type="number"
          value={inputBonus || ""}
          onChange={(e) => setInputBonus(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => {
            if (inputName != null && inputBonus != null) {
              props.addCharacter(inputName, Number(inputBonus));

              setInputName(undefined);
              setInputBonus(undefined);
            }
          }}
        >
          Lägg till
        </Button>
      </Box>
      <MuiList style={{}}>
        {props.characterList.map((c, i) => (
          <ListItem key={c.name}>
            <ListItemIcon onClick={() => props.removeCharacter(i)}>
              <CloseIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={c.name}
              secondary={"IB: " + toSignedString(c.bonus)}
            />
          </ListItem>
        ))}
      </MuiList>
    </Box>
  );
}

export default CharacterList;
