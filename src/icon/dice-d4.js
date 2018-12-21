import React from 'react';
import iconSvg from '../icons/normalized/dice-d4.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__dice-d4" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender