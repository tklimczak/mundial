import React, { useState } from "react";
import "./../App.css";
import "semantic-ui-css/semantic.min.css";
import { CardGroup } from "semantic-ui-react";
import { getHills } from "./utils";
import HillCard from "./HillCard";

interface SkiJumpingHillsProps {
  selectedHills: string[]
  changeHillsState(name: string): void
}

export const SkiJumpingHills: React.FC<SkiJumpingHillsProps> = ({ selectedHills, changeHillsState }) => {
  let hills = getHills().sort((a, b) => a.name.localeCompare(b.name));

  return (

    <CardGroup>
      {hills.map((hill) => (
        <HillCard hill={hill} isSelected={!!selectedHills.find(x => hill.name == x)} changeHillsState={changeHillsState}></HillCard>
      ))}
    </CardGroup>
  );
};

export default SkiJumpingHills;
