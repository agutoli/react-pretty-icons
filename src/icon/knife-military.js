import React from 'react';
import iconSvg from '../icons/normalized/knife-military.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__knife-military" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender