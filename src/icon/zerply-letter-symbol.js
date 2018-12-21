import React from 'react';
import iconSvg from '../icons/normalized/zerply-letter-symbol.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__zerply-letter-symbol" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender