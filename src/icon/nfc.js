import React from 'react';
import iconSvg from '../icons/normalized/nfc.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__nfc" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender