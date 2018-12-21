import React from 'react';
import iconSvg from '../icons/normalized/nut-icon.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__nut-icon" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender