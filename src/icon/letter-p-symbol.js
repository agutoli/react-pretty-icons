import React from 'react';
import iconSvg from '../icons/normalized/letter-p-symbol.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__letter-p-symbol" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender