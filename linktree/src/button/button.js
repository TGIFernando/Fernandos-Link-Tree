import React, { useState } from "react";
import { MainButton } from "./buttonStyles";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Button(props) {
  const [state, setState] = useState({
    value: props.value,
    copied: false,
  });

  return (
    <MainButton>
      <CopyToClipboard
        text={props.value}
        onCopy={() => {
          setState({ copied: true });
        }}
      >
        {state.copied ? <span>Copied!</span> : <span>{props.media}</span>}
      </CopyToClipboard>
    </MainButton>
  );
}

export default Button;
