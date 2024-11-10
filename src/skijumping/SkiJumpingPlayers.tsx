import React, { useState } from "react";
import "./../App.css";
import "semantic-ui-css/semantic.min.css";
import { Button, CardGroup } from "semantic-ui-react";
import { getPlayers, getRandomElement } from "./utils";
import PlayerCard from "./PlayerCard";

interface SkiJumpingPlayersProps {
  selectedPlayers: string[]
  changePlayerState(name: string |  null): void
}

export const SkiJumpingPlayers: React.FC<SkiJumpingPlayersProps> = ({ selectedPlayers, changePlayerState }) => {
  let players = getPlayers();

  const addRandomPlayer=():void =>{
    if (selectedPlayers.length == players.length) {
      return;
    }
    const diff = players.filter(element => !selectedPlayers.includes(element.name));

    const randomElement = getRandomElement(diff);
    if (randomElement){
      changePlayerState(randomElement?.name);
    }
  }

  const resetPlayers=():void =>{
    changePlayerState(null);
  }

  return (

    <div style={{ textAlign: 'left' }}>
      <div style={{ paddingBottom: '10px' }}>
        <Button primary onClick={() => addRandomPlayer()}>
          Losuj
        </Button>
        <Button primary onClick={() => resetPlayers()}>
          Reset
        </Button>
      </div>
      <CardGroup>
      {players.map((player) => (
        <PlayerCard player={player} isSelected={!!selectedPlayers.find(x => player.name == x)} changePlayerState={changePlayerState}></PlayerCard>
      ))}
    </CardGroup>
    </div>

    
  );
};

export default SkiJumpingPlayers;
