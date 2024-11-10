import React, { useState } from "react";
import "./../App.css";
import "semantic-ui-css/semantic.min.css";
import { Card, Image, CardContent, CardHeader, CardMeta } from "semantic-ui-react";
import Flag from "react-world-flags";
import { Player } from "./utils";


interface PlayerCardProps {
  player: Player;
  isSelected?: boolean
  changePlayerState?(name: string): void
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player, isSelected, changePlayerState }) => {

  const buttonStyle = {
    border: isSelected ? '2px solid #189ad3' : '0px solid #00FF00',
    cursor: 'pointer'
  };
  return (

    <Card style={buttonStyle} onClick={() => changePlayerState ? changePlayerState(player.name) : console.log()}>
      <CardContent>
        <div >
          <Image
            style={{ width: 'auto', height: '100px' }}
            floated='right'
            size='mini'
            src={player.url}
          />
        </div>
        <CardHeader>{player.name}</CardHeader>
        <CardMeta> <br /><Flag code={player.country_code as string} height="32" style={{ border: '1px solid #CCCCCC' }} /></CardMeta>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
