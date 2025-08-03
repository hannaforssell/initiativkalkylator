import {
  Box,
  List as MuiList,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  type Theme,
  type SxProps,
} from "@mui/material";
import { Character } from "../models/Character";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { List } from "immutable";
import React from "react";
import { IniativePlacing } from "../models/IniativePlacing";

interface IInitiativeList {
  characterList: List<Character>;
}

function rollInitiative(characters: List<Character>) {
  return characters.map(
    (c) =>
      new IniativePlacing(c.name, Math.floor(Math.random() * 10) + 1 + c.bonus)
  );
}

function getStyling(ip: IniativePlacing): SxProps<Theme> {
  const ret: any = {};

  if (ip.acted) {
    ret.textDecoration = "line-through";
  }

  if (ip.damage > 0) {
    ret.color = "red";
  }

  return ret;
}

function InitiativeList(props: IInitiativeList) {
  const [bitflip, setBitflip] = React.useState<boolean>(false);
  const [initPlacings, setInitPlacings] = React.useState<List<IniativePlacing>>(
    List()
  );

  function update() {
    setBitflip(!bitflip);
  }

  return (
    <Box>
      <Button
        variant="contained"
        onClick={() => {
          setInitPlacings(rollInitiative(props.characterList));
        }}
      >
        Ny runda
      </Button>
      <MuiList style={{}}>
        {initPlacings
          .sort((a, b) => b.init - a.init)
          .map((c) => (
            <ListItem key={c.name}>
              <ListItemIcon>
                <AddCircleIcon
                  fontSize="small"
                  onClick={() => {
                    c.damage++;
                    update();
                  }}
                />
                <RemoveCircleIcon
                  fontSize="small"
                  onClick={() => {
                    c.damage--;
                    update();
                  }}
                />
              </ListItemIcon>

              <ListItemText
                primary={c.name + ` (${c.damage})`}
                secondary={"IB: " + c.init}
                sx={getStyling(c)}
                onClick={() => {
                  c.acted = !c.acted;
                  update();
                }}
              />
            </ListItem>
          ))}
      </MuiList>
    </Box>
  );
}

export default InitiativeList;
