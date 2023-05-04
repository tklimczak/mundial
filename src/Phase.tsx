import React from "react";
import { Card } from "semantic-ui-react";
import Country from "./Country";
import { countries } from "./utils";

interface PhasePros {
  teamA: string;
  teamB: string;
  onSelectWinner: (index: number) => void;
  winnerNumber: number;
}

export const Phase: React.FC<PhasePros> = ({
  teamA,
  teamB,
  winnerNumber,
  onSelectWinner
}) => {
  return (
    <Card
    >
      <Card.Content>
          <div style={{padding:5}}>
                <Country isSelected={winnerNumber === 0 } onCountrySelection={()=>onSelectWinner(0)}
                  country={countries.find(f=>f.countryCode === teamA) }
                />
                
          </div>
          <div>
                 <Country isSelected={winnerNumber === 1 } onCountrySelection={()=>onSelectWinner(1)}
                  country={countries.find(f=>f.countryCode === teamB) }
                />
                </div>
      </Card.Content>
    </Card>
  );
};

export default Phase;
