import React from 'react';
import iconSvg from '../icons/normalized/temperature-kelvin.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__temperature-kelvin" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender