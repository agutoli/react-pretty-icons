import React from 'react';
import iconSvg from '../icons/normalized/printer.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__printer" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender