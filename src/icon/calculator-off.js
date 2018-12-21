import React from 'react';
import iconSvg from '../icons/normalized/calculator-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__calculator-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender