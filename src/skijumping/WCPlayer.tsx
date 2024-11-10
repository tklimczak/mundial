import React from "react";
import {
  Button,
  Label,
  Image,
} from "semantic-ui-react";
import Flag from "react-world-flags";
import { Player } from "./utils";


interface WCPlayerProps {
  player: Player | undefined;
  onPlayerSelection?: (key: string) => void;
  isSelected?: boolean;
}

export const WCPlayer: React.FC<WCPlayerProps> = ({
  player,
  onPlayerSelection,
  isSelected,
}) => {
  if (player === undefined) {
    return <div></div>;
  }
  return (
    <Button
      as="div"
      labelPosition="right"
      onClick={() =>
        onPlayerSelection
          ? onPlayerSelection(player.name)
          : console.log()
      }
    >
      <Button basic color={isSelected ? "red" : "blue"}>
        <Image
          style={{ width: 'auto', height: '50px' }}
          floated='right'
          size='mini'
          src={player.url}
        />

      </Button>
      <Label as="a" basic color={isSelected ? "red" : "blue"} pointing="left">
        <Flag code={player.country_code as string} height="10" /> {player.name}
      </Label>
    </Button>
  );
};

export default WCPlayer;