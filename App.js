import React, { useState, useEffect } from "react";
import MainScreen from "./src/screens/MainScreen";
import { ThemeProvider } from "./src/context/ThemeContext";


const App = () => {
  return (
    <ThemeProvider>
      <MainScreen />
    </ThemeProvider>
  );
};
export default App;
