import React from 'react';
import iconSvg from '../icons/normalized/hospital.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hospital" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender