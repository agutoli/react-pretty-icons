import React from 'react';
import iconSvg from '../icons/normalized/dice.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__dice" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender