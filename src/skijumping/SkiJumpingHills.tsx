import React, { useState } from "react";
import "./../App.css";
import "semantic-ui-css/semantic.min.css";
import { Button, CardGroup, Icon } from "semantic-ui-react";
import { getHills, getRandomElement } from "./utils";
import HillCard from "./HillCard";

interface SkiJumpingHillsProps {
  selectedHills: string[]
  changeHillsState(name: string | null): void
}

export const SkiJumpingHills: React.FC<SkiJumpingHillsProps> = ({ selectedHills, changeHillsState }) => {
  let hills = getHills().sort((a, b) => a.name.localeCompare(b.name));

  const addRandomHill=():void =>{
    if (selectedHills.length == hills.length) {
      return;
    }
    const diff = hills.filter(element => !selectedHills.includes(element.name));

    const randomElement = getRandomElement(diff);
    if (randomElement){
      changeHillsState(randomElement?.name);
    }
  }

  const resetHills=():void =>{
      changeHillsState(null);
  }

  return (
    <div style={{ textAlign: 'left' }}>
      <div style={{ paddingBottom: '10px' }}>
        <Button primary onClick={() => addRandomHill()}>
          Losuj
        </Button>
        <Button primary onClick={() => resetHills()}>
          Reset
        </Button>
      </div>
      <CardGroup>
        {hills.map((hill) => (
          <HillCard hill={hill} isSelected={!!selectedHills.find(x => hill.name == x)} changeHillsState={changeHillsState}></HillCard>
        ))}
      </CardGroup>
    </div>

  );
};

export default SkiJumpingHills;
