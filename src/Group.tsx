import React from "react";
import { Card, Table } from "semantic-ui-react";
import Country from "./Country";
import { countries, GroupItem } from "./utils";

interface GroupPros {
  item: GroupItem;
  selectedCountry: string;
  onGroupByChange: (key: string) => void;
}

export const CardExampleGroups: React.FC<GroupPros> = ({
  item,
  selectedCountry,
  onGroupByChange,
}) => {
  return (
    <Card
    >
      <Card.Content>
        <Card.Header> Group: {item.name}</Card.Header>
        <Table compact>
        <Table.Body>
          {item.countries.map((x) => (
            <Table.Row>
              <Table.Cell onClick={() => onGroupByChange(x)}>
                <Country isSelected={selectedCountry === x}
                  country={countries.find(f=>f.countryCode === x) }
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      </Card.Content>
    </Card>
  );
};

export default CardExampleGroups;
