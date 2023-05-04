import React from "react";
import {
  Button,
  Label,
} from "semantic-ui-react";
import Flag from "react-world-flags";

interface Ctr {
  countryCode: String;
  name: String;
}

interface CountryProps {
  country: Ctr | undefined;
  onCountrySelection?: (key: String) => void;
  isSelected?: boolean;
}

export const Country: React.FC<CountryProps> = ({
  country,
  onCountrySelection,
  isSelected,
}) => {
  if (country === undefined) {
    return <div></div>;
  }
  return (
    <Button
      as="div"
      labelPosition="right"
      onClick={() =>
        onCountrySelection
          ? onCountrySelection(country.countryCode)
          : console.log()
      }
    >
      <Button basic color={isSelected ? "red" : "blue"}>
        <Flag code={country.countryCode as string} height="32" />
      </Button>
      <Label as="a" basic color={isSelected ? "red" : "blue"} pointing="left">
        {country.name}
      </Label>
    </Button>
  );
};

export default Country;