import React, { useState } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Tab } from "semantic-ui-react";
import { createInitialGroups, GroupItem } from "./utils";
import Eliminations from "./Eliminations";
import Mundial from "./Mundial";

function App() {
  let initialGroup = createInitialGroups()

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
