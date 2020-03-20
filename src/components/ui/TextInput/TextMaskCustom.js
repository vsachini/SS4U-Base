import React from 'react'
import MaskedInput from "react-text-mask";

const TextMaskCustom = props => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      { ...other }
      ref={ ref => { inputRef(ref ? ref.inputElement : null); }}
      mask={ props.mask }
    />
  );
}

export default TextMaskCustom