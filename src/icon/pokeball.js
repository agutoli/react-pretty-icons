import React from 'react';
import iconSvg from '../icons/normalized/pokeball.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pokeball" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender