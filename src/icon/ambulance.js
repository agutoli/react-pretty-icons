import React from 'react';
import iconSvg from '../icons/normalized/ambulance.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ambulance" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender