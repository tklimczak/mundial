import React, { useState } from "react";
import "./../App.css";
import "semantic-ui-css/semantic.min.css";
import { Card, CardContent, CardGroup, CardHeader, CardMeta, Table } from "semantic-ui-react";
import { Hill, Player } from "./utils";
import Flag from "react-world-flags";
import WCPlayer from "./WCPlayer";


interface WorldCupHillProps {
  hill: Hill
  players: Player[]
  onOrderChange:(hill:Hill, players:Player[]) => void;
}

export const WorldCupHill: React.FC<WorldCupHillProps> = ({ hill, players, onOrderChange }) => {

  const [orderedPlayers, setPlayers] = useState<Player[]>([...players]);
  const [selectedPlayer, selectPlayer] = useState<string>("");

  const onPlayerSelection = (name: string): void => {
    selectPlayer(name);

    if (selectedPlayer) {

      let newList = orderedPlayers;
      // Find the indexes of the elements to swap
      const index1 = newList.findIndex(player => player.name === selectedPlayer);
      const index2 = newList.findIndex(player => player.name === name);

      // Swap the elements if both are found
      if (index1 !== -1 && index2 !== -1) {
        const temp = newList[index1];
        newList[index1] = newList[index2];
        newList[index2] = temp;
      }

      setPlayers(newList);
      selectPlayer('')
      onOrderChange(hill, newList)
    }
  };

  return (
    <CardGroup>
      <Card>
        <CardContent>
          <CardHeader>{hill.name} </CardHeader>
          <CardMeta> <br /><Flag code={hill.country_code as string} height="32" style={{ border: '1px solid #CCCCCC' }} /> HS: {hill.hs}</CardMeta>


          <Table compact>
            <Table.Body>
              {orderedPlayers.map((player) => (
                <Table.Row>
                  <Table.Cell>
                    <WCPlayer player={player} isSelected={player.name == selectedPlayer} onPlayerSelection={onPlayerSelection} />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>

        </CardContent>
      </Card>
    </CardGroup>
  );
};

export default WorldCupHill;
