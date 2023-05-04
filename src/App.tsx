import React, { useState } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Tab } from "semantic-ui-react";
import { GroupItem } from "./utils";
import Eliminations from "./Eliminations";
import Mundial from "./Mundial";

function App() {
  let initialGroup: GroupItem[] = [];

  initialGroup.push({ name: "A", countries: ["gb", "it", "mx", "qa"] });
  initialGroup.push({ name: "B", countries: ["ar", "is", "se", "us"] });
  initialGroup.push({ name: "C", countries: ["fr", "es", "rs", "ir"] });
  initialGroup.push({ name: "D", countries: ["be", "de", "ae", "fi"] });
  initialGroup.push({ name: "E", countries: ["hr", "pl", "cz", "ca"] });
  initialGroup.push({ name: "F", countries: ["br", "nl", "uy", "co"] });
  initialGroup.push({ name: "G", countries: ["pt", "eg", "dk", "sn"] });
  initialGroup.push({ name: "H", countries: ["dz", "ru", "no", "ne"] });

  const [groups, setGroups] = useState<GroupItem[]>(initialGroup);

  const setMyGroups = (groups: GroupItem[]): void => {
    setGroups(groups);
  };

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
  ];

  return (
    <div className="App">
      <br></br>
      <Tab menu={{ secondary: true }} panes={panes} />
    </div>
  );
}

export default App;
