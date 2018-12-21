import React from 'react';
import iconSvg from '../icons/normalized/dice-d8.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__dice-d8" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender