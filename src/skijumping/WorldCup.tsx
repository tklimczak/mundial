import React, { useState } from "react";
import "./../App.css";
import "semantic-ui-css/semantic.min.css";
import { CardGroup } from "semantic-ui-react";
import { getHills, getPlayers, Hill, Player } from "./utils";
import WorldCupHill from "./WorldCupHill";
import WinnerList, { Competition } from "./WinnerList";

interface WorldCupProps {
  selectedHills: string[]
  selectedPlayers: string[]
}

export const WorldCup: React.FC<WorldCupProps> = ({ selectedHills, selectedPlayers }) => {
  let hills = getHills().filter(x => selectedHills.includes(x.name));
  let players = getPlayers().filter(x => selectedPlayers.includes(x.name));

  let compList: Competition[] = []
  
  hills.map(h=> {
    compList.push({hill:h, players:players});
  })
  const [competitions, setCompetition] = useState<Competition[]>(compList);

  const onOrderChange=(hill:Hill, players:Player[]):void =>{
    
    let h = competitions.find(x=>x.hill.name == hill.name)
    if (h) {
      h.players = players;
      setCompetition([...competitions])
    }
  }
  return (
    <div>
      <CardGroup>
        {hills.map((hill) => (
          <div>
            <WorldCupHill hill={hill} players={players} onOrderChange={onOrderChange}></WorldCupHill>
          </div>
        ))}
      </CardGroup>
      <WinnerList competitions={competitions}></WinnerList>
    </div>
  );
};

export default WorldCup;
