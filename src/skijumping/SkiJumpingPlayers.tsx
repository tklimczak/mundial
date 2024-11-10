import React, { useState } from "react";
import "./../App.css";
import "semantic-ui-css/semantic.min.css";
import { CardGroup } from "semantic-ui-react";
import { getPlayers } from "./utils";
import PlayerCard from "./PlayerCard";

interface SkiJumpingPlayersProps {
  selectedPlayers: string[]
  changePlayerState(name: string): void
}

export const SkiJumpingPlayers: React.FC<SkiJumpingPlayersProps> = ({ selectedPlayers, changePlayerState }) => {
  let players = getPlayers();

  return (

    <CardGroup>
      {players.map((player) => (
        <PlayerCard player={player} isSelected={!!selectedPlayers.find(x => player.name == x)} changePlayerState={changePlayerState}></PlayerCard>
      ))}
    </CardGroup>
  );
};

export default SkiJumpingPlayers;
