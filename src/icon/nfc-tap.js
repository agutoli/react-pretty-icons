import React from 'react';
import iconSvg from '../icons/normalized/nfc-tap.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__nfc-tap" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender