import React from 'react';
import iconSvg from '../icons/normalized/umbrella-closed.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__umbrella-closed" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender