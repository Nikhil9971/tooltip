import styled from "styled-components";
import Tooltip from "./components/tooltip";
import "./styles.css";
import { useState } from "react";
const TooltipTarget = styled.span``;

export default function App() {
  const [val, setVal] = useState("top");

  return (
    <div className="App">
      <select onChange={(e) => setVal(e.target.value)}>
        <option value="top">Top</option>
        <option value="right">Right</option>
        <option value="bottom">Bottom</option>
        <option value="left">Left</option>
      </select>
      <Tooltip
        text="I am a tooltip"
        position={val}
        background="222831"
        className="tooltip">
        <TooltipTarget>Hover over me</TooltipTarget>
      </Tooltip>
    </div>
  );
}
