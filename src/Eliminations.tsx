import React, { useState } from "react";
import "./App.css";
import CardExampleGroups from "./Group";
import "semantic-ui-css/semantic.min.css";
import { Card, Table } from "semantic-ui-react";
import { countries, GroupItem } from "./utils";
import Country from "./Country";

interface GroupPros {
  groups: GroupItem[];
  setGroups: (groups: GroupItem[]) => void;
}

export const Eliminations: React.FC<GroupPros> = ({ groups, setGroups }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const onGroupByChange = (key: string): void => {
    setSelectedCountry(key);
  };

  const onCountrySelection = (code: String): void => {
    let group = groups.find((x) => x.countries.includes(selectedCountry));

    const indexOf = group?.countries.indexOf(selectedCountry);
    if (indexOf !== -1 && indexOf != undefined){
        group?.countries.splice(indexOf,1, code as string);

    }
    setGroups([...groups]);
  };

  const selectedCountries = groups.map((x) => x.countries).flat();

  const availableCountries: any[] = [];

  countries.forEach((item) => {
    if (!selectedCountries.includes(item.countryCode)) {
      availableCountries.push(item);
      
    }
  });

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
      <Table compact>
        <Table.Body>
          {[...Array(Math.round(availableCountries.length / 4))].map((x, i) => (
            <Table.Row>
              <Table.Cell>
                <Country
                  country={availableCountries[i]}
                  onCountrySelection={onCountrySelection}
                />
              </Table.Cell>
              <Table.Cell>
                <Country
                  country={
                    availableCountries[
                      i + Math.round(availableCountries.length / 4)
                    ]
                  }
                  onCountrySelection={onCountrySelection}
                />
              </Table.Cell>
              <Table.Cell>
                <Country
                  country={
                    availableCountries[
                      i + Math.round(availableCountries.length / 4) * 2
                    ]
                  }
                  onCountrySelection={onCountrySelection}
                />
              </Table.Cell>
              <Table.Cell>
                <Country
                  country={countries[i + Math.round(countries.length / 4) * 3]}
                  onCountrySelection={onCountrySelection}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Eliminations;