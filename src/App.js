import React from "react";
// import ColorBox from "./components/ColorBox";
// import ColorContext from "./contexts/color";
import ColorBoxDynamic from "./components/ColorBoxDynamic";
import { ColorProvider } from "./contexts/colorDynamic";
import SelectColors from "./components/SelectColors";

function App() {
  return (
    // Provider는 value 값 필수
    // <ColorContext.Provider value={{color: 'red'}}>
    //    <>
    //     <ColorBox/>
    //   </>
    // </ColorContext.Provider>
    <ColorProvider>
      <>
        <SelectColors/>
        <br/>
        <br/>
        <ColorBoxDynamic/>
      </>
    </ColorProvider>
  );
}

export default App;