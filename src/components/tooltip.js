import { useState } from "react";
import {
  TooltipWrapper,
  TooltipTarget,
  CenterContainer,
  TooltipBox,
} from "./styled";

function Tooltip({ position, text, children, background, styleMe = true }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TooltipWrapper>
      <TooltipTarget
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        styleMe={styleMe}>
        {children}
      </TooltipTarget>
      {isHovered && (
        <CenterContainer position={position}>
          <TooltipBox background={background} position={position}>
            {text}
          </TooltipBox>
        </CenterContainer>
      )}
    </TooltipWrapper>
  );
}

export default Tooltip;
