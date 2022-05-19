import Background from "./background/background";

function App() {
  return (
    <div className="App">
      <Background />
    </div>
  );
}

export default App;
// import React, { useState, useEffect } from "react";

// const App = () => {
//   const isLandscape = () =>
//       window.matchMedia("(orientation:landscape)").matches,
//     [orientation, setOrientation] = useState(
//       isLandscape() ? "landscape" : "portrait"
//     ),
//     onWindowResize = () => {
//       clearTimeout(window.resizeLag);
//       window.resizeLag = setTimeout(() => {
//         delete window.resizeLag;
//         setOrientation(isLandscape() ? "landscape" : "portrait");
//       }, 200);
//     };

//   useEffect(
//     () => (
//       onWindowResize(),
//       window.addEventListener("resize", onWindowResize),
//       () => window.removeEventListener("resize", onWindowResize)
//     ),
//     []
//   );

//   return (
//     <div className="App">
//       {orientation}
//       <Background />
//     </div>
//   );
// };

// export default App;
