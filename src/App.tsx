import React, { useState } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Tab } from "semantic-ui-react";
import { createInitialGroups, GroupItem } from "./utils";
import Eliminations from "./Eliminations";
import Mundial from "./Mundial";
import SkiJumpingPlayers from "./skijumping/SkiJumpingPlayers";
import { getPlayers } from "./skijumping/utils";
import SkiJumpingHills from "./skijumping/SkiJumpingHills";
import WorldCup from "./skijumping/WorldCup";

function App() {
  let initialGroup = createInitialGroups()
  let players = getPlayers();

  const [groups, setGroups] = useState<GroupItem[]>(initialGroup);
  const [selectedPlayers, setPlayers] = useState<string[]>([]);
  const [selectedHills, setHills] = useState<string[]>([]);

  const setMyGroups = (groups: GroupItem[]): void => {
    setGroups(groups);
  };

  const changePlayerState=(name:string):void =>{
    
    let found = selectedPlayers.find(x=>x == name);
    if (found) {
      let newList  = selectedPlayers.filter(x=>x != name);
      setPlayers([...newList]);
    }  else {
      let newList  = selectedPlayers;
      newList.push(name);
      setPlayers([...newList]);
    }
  }

  const changeHillsState=(name:string):void =>{
    
    let found = selectedHills.find(x=>x == name);
    if (found) {
      let newList  = selectedHills.filter(x=>x != name);
      setHills([...newList]);
    }  else {
      let newList  = selectedHills;
      newList.push(name);
      setHills([...newList]);
    }
  }

  const panes = [
    {
      menuItem: "Eleminacje",
      render: () => (
        <Tab.Pane attached={false}>
          <Eliminations groups={groups} setGroups={setMyGroups}/>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Munidal",
      render: () => <Tab.Pane attached={false}>
        <Mundial groups={groups} setGroups={setMyGroups}/>
      </Tab.Pane>,
    },
    {
      menuItem: "Lista Skoczkow",
      render: () => <Tab.Pane attached={false}>
        <SkiJumpingPlayers selectedPlayers={selectedPlayers} changePlayerState={changePlayerState}/>
      </Tab.Pane>,
    },
    {
      menuItem: "Lista Skoczni",
      render: () => <Tab.Pane attached={false}>
        <SkiJumpingHills selectedHills={selectedHills} changeHillsState={changeHillsState}/>
      </Tab.Pane>,
    },
    {
      menuItem: "Puchar Swiata",
      render: () => <Tab.Pane attached={false}>
        <WorldCup selectedHills={selectedHills} selectedPlayers={selectedPlayers} />
      </Tab.Pane>,
    },
  ];

  return (
    <div className="App">
      <br></br>
      <Tab menu={{ secondary: true }} panes={panes} />
    </div>
  );
}

export default App;
