import React from 'react';
import iconSvg from '../icons/normalized/gas-cylinder.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gas-cylinder" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender