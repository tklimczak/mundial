import React from "react";
import {
  Table,
  CardGroup,
  Card,
  CardContent,
  CardHeader,
} from "semantic-ui-react";
import { getScores, Hill, Player } from "./utils";
import PlayerCard from "./PlayerCard";

export interface Competition {
  hill: Hill
  players: Player[]
}

export interface ScoredPlayer {
  player: Player
  score: number
}
interface WinnerListProps {
  competitions: Competition[];
}

export const WinnerList: React.FC<WinnerListProps> = ({
  competitions
}) => {

  let scores = getScores();
  let players = competitions[0].players;

  console.log(JSON.stringify(competitions));

  let scoredPlayers: ScoredPlayer[] = [];

  competitions.forEach(c=> {
    players.map(p => {
      let found = scoredPlayers.find(x=>x.player.name === p.name);
      if (!found)
        scoredPlayers.push({ player: p, score: 0 })
    })
  })
   console.table(competitions);
  competitions.forEach(c=> {

    for (let i = 0; i < c.players.length; i++) {
      let index = scoredPlayers.findIndex(x=>x.player.name === c.players[i].name);
      if (index >= 0) {
        scoredPlayers[index].score += scores[i] ? scores[i] : 0;
      }
    }
  })
 

  return (
    <CardGroup itemsPerRow={1}>
      <Card>
        <CardContent>
          <CardHeader>Wyiniki  </CardHeader>

          <Table compact>
            <Table.Body>
              {scoredPlayers.sort((a, b) => b.score - a.score).map((player) => (
                <Table.Row>
                  <Table.Cell>
                    <PlayerCard player={player.player} />
                  </Table.Cell>

                  <Table.Cell>
                    {player.score}
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

export default WinnerList;