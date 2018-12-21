import React from 'react';
import iconSvg from '../icons/normalized/airplay.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__airplay" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender