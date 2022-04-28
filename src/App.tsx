import React from "react";
import "./App.css";
import { ContextProvider } from "./components/Context";
import SecondScreen from "./components/SecondScreen/SecondScreen";
import FirstScreen from "./components/FirstScreen/FirstScreen";
import ThirdScreen from "./components/ ThirdScreen/ThirdScreen";
import FourScreen from "./components/FourScreen/FourScreen";

function App() {
  return (
    <ContextProvider>
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
      <FourScreen />
    </ContextProvider>
  );
}

export default App;
