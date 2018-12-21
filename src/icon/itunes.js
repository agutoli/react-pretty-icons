import React from 'react';
import iconSvg from '../icons/normalized/itunes.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__itunes" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender