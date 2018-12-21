import React from 'react';
import iconSvg from '../icons/normalized/pharmacy.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pharmacy" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender