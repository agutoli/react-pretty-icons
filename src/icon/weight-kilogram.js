import React from 'react';
import iconSvg from '../icons/normalized/weight-kilogram.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__weight-kilogram" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender