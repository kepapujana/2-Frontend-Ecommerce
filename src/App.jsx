import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppAr from "./views/AppAr";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppAr />
      <AppAr />
      <AppAr />
      <AppAr />
      <AppAr />
      <AppAr />
    </>
  );
}

export default App;
