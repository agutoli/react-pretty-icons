import React from 'react';
import iconSvg from '../icons/normalized/light-switch.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__light-switch" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender