import React from 'react';
import iconSvg from '../icons/normalized/calculator.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__calculator" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender