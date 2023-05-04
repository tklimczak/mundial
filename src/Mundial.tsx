import React, { useState } from "react";
import "./App.css";
import CardExampleGroups from "./Group";
import "semantic-ui-css/semantic.min.css";
import { Card } from "semantic-ui-react";
import { countries, GroupItem } from "./utils";
import Phase from "./Phase";
import Flag from "react-world-flags";

interface GroupPros {
  groups: GroupItem[];
  setGroups: (groups: GroupItem[]) => void;
}

export const Mundial: React.FC<GroupPros> = ({ groups, setGroups }) => {
  const [oneEighth, setOneEighth] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [quarter, setQuarter] = useState<number[]>([0, 0, 0, 0]);
  const [half, setHalf] = useState<number[]>([0, 0]);
  const [final, setFinal] = useState<number[]>([0, 0]);

  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const getQuarterTeam = (phase: number): string[] => {
    if (phase === 0) {
      return [
        oneEighth[0] ? groups[1].countries[1] : groups[0].countries[0],
        oneEighth[1] ? groups[3].countries[1] : groups[2].countries[0],
      ];
    }
    if (phase === 1) {
      return [
        oneEighth[2] ? groups[5].countries[1] : groups[4].countries[0],
        oneEighth[3] ? groups[7].countries[1] : groups[6].countries[0],
      ];
    }

    if (phase === 2) {
      return [
        !oneEighth[4] ? groups[0].countries[1] : groups[1].countries[0],
        !oneEighth[5] ? groups[2].countries[1] : groups[3].countries[0],
      ];
    }

    if (phase === 3) {
      return [
        !oneEighth[6] ? groups[4].countries[1] : groups[5].countries[0],
        !oneEighth[7] ? groups[6].countries[1] : groups[7].countries[0],
      ];
    }
    return ["", ""];
  };

  const getHalfTeam = (phase: number): string[] => {
    if (phase === 0) {
      return [
        !quarter[0] ? getQuarterTeam(0)[0] : getQuarterTeam(0)[1],
        !quarter[1] ? getQuarterTeam(1)[0] : getQuarterTeam(1)[1],
      ];
    }
    if (phase === 1) {
      return [
        !quarter[2] ? getQuarterTeam(2)[0] : getQuarterTeam(2)[1],
        !quarter[3] ? getQuarterTeam(3)[0] : getQuarterTeam(3)[1],
      ];
    }
    return ["", ""];
  };

  const getFinalTeam = (): string[] => {
      return [
        !half[0] ? getHalfTeam(0)[0] : getHalfTeam(0)[1],
        !half[1] ? getHalfTeam(1)[0] : getHalfTeam(1)[1],
      ];
  };

  const getWinner = (): string => {
      return !final[0] ? getFinalTeam()[0] : getFinalTeam()[1];
};
  const onGroupByChange = (key: string): void => {
    if (key === selectedCountry) {
      return;
    }
    if (selectedCountry === "") {
      setSelectedCountry(key);
    }

    let isTheSameGroup = groups.find(
      (g) => g.countries.includes(selectedCountry) && g.countries.includes(key)
    );
    if (!isTheSameGroup) {
      setSelectedCountry(key);
    } else {
      let group = groups.find((x) => x.countries.includes(selectedCountry));

      let indexOf = group?.countries.indexOf(selectedCountry);
      if (indexOf !== -1 && indexOf !== undefined) {
        group?.countries.splice(indexOf, 1, "aaaaa");
      }

      indexOf = group?.countries.indexOf(key);
      if (indexOf !== -1 && indexOf !== undefined) {
        group?.countries.splice(indexOf, 1, "bbbbb");
      }

      indexOf = group?.countries.indexOf("aaaaa");
      if (indexOf !== -1 && indexOf !== undefined) {
        group?.countries.splice(indexOf, 1, key);
      }

      indexOf = group?.countries.indexOf("bbbbb");
      if (indexOf !== -1 && indexOf !== undefined) {
        group?.countries.splice(indexOf, 1, selectedCountry);
      }

      setGroups([...groups]);

      setSelectedCountry("");
    }
  };

  const onSelectWinner = (idx: number, number: number): void => {
    oneEighth[idx] = number;
    setOneEighth([...oneEighth]);
  };

  const onSelectQuarterWinner = (idx: number, number: number): void => {
    quarter[idx] = number;
    setQuarter([...quarter]);
  };

  const onSelectHalfWinner = (idx: number, number: number): void => {
    half[idx] = number;
    setHalf([...half]);
  };

  const onSelectFinalWinner = (idx: number, number: number): void => {
    final[idx] = number;
    setFinal([...final]);
  };

  return (
    <div className="App">
      <br></br>

      <Card.Group>
        {groups.slice(0, 4).map((x) => (
          <CardExampleGroups
            item={x}
            selectedCountry={selectedCountry}
            onGroupByChange={onGroupByChange}
          />
        ))}
      </Card.Group>

      <Card.Group>
        {groups.slice(4, 8).map((x) => (
          <CardExampleGroups
            item={x}
            selectedCountry={selectedCountry}
            onGroupByChange={onGroupByChange}
          />
        ))}
      </Card.Group>

      <br></br>
      <h3>1/8</h3>
      <Card.Group>
        <Phase
          teamA={groups[0].countries[0]}
          teamB={groups[1].countries[1]}
          onSelectWinner={(number) => onSelectWinner(0, number)}
          winnerNumber={oneEighth[0]}
        />
        <Phase
          teamA={groups[2].countries[0]}
          teamB={groups[3].countries[1]}
          onSelectWinner={(number) => onSelectWinner(1, number)}
          winnerNumber={oneEighth[1]}
        />
        <Phase
          teamA={groups[4].countries[0]}
          teamB={groups[5].countries[1]}
          onSelectWinner={(number) => onSelectWinner(2, number)}
          winnerNumber={oneEighth[2]}
        />
        <Phase
          teamA={groups[6].countries[0]}
          teamB={groups[7].countries[1]}
          onSelectWinner={(number) => onSelectWinner(3, number)}
          winnerNumber={oneEighth[3]}
        />
      </Card.Group>
      <Card.Group>
        <Phase
          teamA={groups[0].countries[1]}
          teamB={groups[1].countries[0]}
          onSelectWinner={(number) => onSelectWinner(4, number)}
          winnerNumber={oneEighth[4]}
        />
        <Phase
          teamA={groups[2].countries[1]}
          teamB={groups[3].countries[0]}
          onSelectWinner={(number) => onSelectWinner(5, number)}
          winnerNumber={oneEighth[5]}
        />
        <Phase
          teamA={groups[4].countries[1]}
          teamB={groups[5].countries[0]}
          onSelectWinner={(number) => onSelectWinner(6, number)}
          winnerNumber={oneEighth[6]}
        />
        <Phase
          teamA={groups[6].countries[1]}
          teamB={groups[7].countries[0]}
          onSelectWinner={(number) => onSelectWinner(7, number)}
          winnerNumber={oneEighth[7]}
        />
      </Card.Group>

      <h3>1/4</h3>
      <Card.Group>
        <Phase
          teamA={getQuarterTeam(0)[0]}
          teamB={getQuarterTeam(0)[1]}
          onSelectWinner={(number) => onSelectQuarterWinner(0, number)}
          winnerNumber={quarter[0]}
        />
        <Phase
          teamA={getQuarterTeam(1)[0]}
          teamB={getQuarterTeam(1)[1]}
          onSelectWinner={(number) => onSelectQuarterWinner(1, number)}
          winnerNumber={quarter[1]}
        />
        <Phase
          teamA={getQuarterTeam(2)[0]}
          teamB={getQuarterTeam(2)[1]}
          onSelectWinner={(number) => onSelectQuarterWinner(2, number)}
          winnerNumber={quarter[2]}
        />
        <Phase
          teamA={getQuarterTeam(3)[0]}
          teamB={getQuarterTeam(3)[1]}
          onSelectWinner={(number) => onSelectQuarterWinner(3, number)}
          winnerNumber={quarter[3]}
        />
      </Card.Group>

      <h3>1/2</h3>
      <Card.Group>
        <Phase
           teamA={getHalfTeam(0)[0]}
           teamB={getHalfTeam(0)[1]}
          onSelectWinner={(number) => onSelectHalfWinner(0, number)}
          winnerNumber={half[0]}
        />
        <Phase
           teamA={getHalfTeam(1)[0]}
           teamB={getHalfTeam(1)[1]}
          onSelectWinner={(number) => onSelectHalfWinner(1, number)}
          winnerNumber={half[1]}
        />
      </Card.Group>

      <h3>Final</h3>
      <Card.Group>
        <Phase
          teamA={getFinalTeam()[0]}
          teamB={getFinalTeam()[1]}
          onSelectWinner={(number) => onSelectFinalWinner(0, number)}
          winnerNumber={final[0]}
        />
      </Card.Group>

      <h3>Winner: {countries.find(x=>x.countryCode === getWinner())?.name}</h3>

      <Flag code={countries.find(x=>x.countryCode === getWinner())?.countryCode}  height="64"/>
      
    </div>
  );
};

export default Mundial;
