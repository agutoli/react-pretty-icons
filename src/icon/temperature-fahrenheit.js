import React from 'react';
import iconSvg from '../icons/normalized/temperature-fahrenheit.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__temperature-fahrenheit" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender