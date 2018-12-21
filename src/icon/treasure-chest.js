import React from 'react';
import iconSvg from '../icons/normalized/treasure-chest.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__treasure-chest" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender