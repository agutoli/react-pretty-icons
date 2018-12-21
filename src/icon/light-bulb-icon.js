import React from 'react';
import iconSvg from '../icons/normalized/light-bulb-icon.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__light-bulb-icon" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender