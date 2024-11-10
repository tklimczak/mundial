import React, { useState } from "react";
import "./../App.css";
import "semantic-ui-css/semantic.min.css";
import { Card, CardContent, CardHeader, CardMeta } from "semantic-ui-react";
import Flag from "react-world-flags";
import { Hill } from "./utils";


interface HillCardProps {
  hill: Hill;
  isSelected: boolean
  changeHillsState(name: string): void
}


export const HillCard: React.FC<HillCardProps> = ({ hill, isSelected, changeHillsState }) => {


  const buttonStyle = {
    border: isSelected ? '2px solid #189ad3' : '0px solid #00FF00',
    cursor: 'pointer'
  };
  return (

    <Card style={buttonStyle} onClick={() => changeHillsState(hill.name)}>
      <CardContent>
        <CardHeader>{hill.name} </CardHeader>
        <CardMeta> <br /><Flag code={hill.country_code as string} height="32" style={{ border: '1px solid #CCCCCC' }} /> HS: {hill.hs}</CardMeta>
      </CardContent>
    </Card>
  );
};

export default HillCard;
