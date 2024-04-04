"use client";

import ButtonDemo from "../components/ButtonDemo";
import ColorPicker from "../components/ColorPicker";
import PeoplePicker from "../components/PeoplePicker";

import { getPeople } from "../lib/api";

const Homepage = () => {
  const peopleArr = getPeople();
  //console.log({ peopleArr });
  return (
    <div>
      <h1>Wheather app</h1>
      <PeoplePicker people={peopleArr} />
      <ButtonDemo />
      <ColorPicker />
    </div>
  );
};
export default Homepage;
