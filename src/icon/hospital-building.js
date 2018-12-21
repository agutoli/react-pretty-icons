import React from 'react';
import iconSvg from '../icons/normalized/hospital-building.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hospital-building" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender