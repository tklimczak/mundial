import React, { useState } from "react";
import { Button, Card } from "semantic-ui-react";
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
  onSelectWinner,
}) => {


  const calculateWinner = (a:number,b:number): void => {
   if (a >= b) {
    onSelectWinner(0);
   }else {
    onSelectWinner(1);
   }
};

  const [goalsTeamA, setGoalsTeamA] = useState<number>(0);
  const [goalsTeamB, setGoalsTeamB] = useState<number>(0);
  return (
    <Card>
      <Card.Content>
        <div style={{ padding: 5 }}>
          <Country
            isSelected={winnerNumber === 0}
            country={countries.find((f) => f.countryCode === teamA)}
          />
          {goalsTeamA}
        </div>
        <div>
          <Country
            isSelected={winnerNumber === 1}
            country={countries.find((f) => f.countryCode === teamB)}
          />
          {goalsTeamB}
        </div>
        <br></br>
        <div>
          <Button
            icon="plus"
            size="tiny"
            onClick={() => {
              if (goalsTeamA < 10) {
                calculateWinner(goalsTeamA + 1, goalsTeamB);
                setGoalsTeamA(goalsTeamA + 1);
              }
            }}
          />
          <Button
            icon="minus"
            size="tiny"
            onClick={() => {
              if (goalsTeamA > 0) {
                calculateWinner(goalsTeamA - 1, goalsTeamB);
                setGoalsTeamA(goalsTeamA - 1);
              }
            }}
          />
          <Button
            icon="plus"
            size="tiny"
            onClick={() => {
              if (goalsTeamB < 10) {
                calculateWinner(goalsTeamA, goalsTeamB + 1);
                setGoalsTeamB(goalsTeamB + 1);
              }
            }}
          />
          <Button
            icon="minus"
            size="tiny"
            onClick={() => {
              if (goalsTeamB > 0) {
                calculateWinner(goalsTeamA, goalsTeamB - 1);
                setGoalsTeamB(goalsTeamB - 1);
              }
            }}
          />
        </div>
      </Card.Content>
    </Card>
  );
};

export default Phase;
