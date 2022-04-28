import React from "react";
// @ts-ignore
import { HashLink } from "react-router-hash-link";
import Header from "./Header";

const FirstScreen = () => {
  return (
    <div className={"photo1"}>
      <Header />
      <div className="screen" id={"home"}>
        <h1 className="text">Your new adventure</h1>
        <p className="text1">
          Join a team of seekers, travelers and just good people on exciting
          trips around the world with one goal - to create memories!
        </p>
        <button className="button">Apply</button>
      </div>
    </div>
  );
};

export default FirstScreen;
