import React from 'react';
import iconSvg from '../icons/normalized/temperature-celsius.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__temperature-celsius" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender