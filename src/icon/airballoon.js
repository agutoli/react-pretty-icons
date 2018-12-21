import React from 'react';
import iconSvg from '../icons/normalized/airballoon.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__airballoon" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender