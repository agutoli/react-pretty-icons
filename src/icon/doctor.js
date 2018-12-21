import React from 'react';
import iconSvg from '../icons/normalized/doctor.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__doctor" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender