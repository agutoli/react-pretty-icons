import React from 'react';
import iconSvg from '../icons/normalized/printer-wireless.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__printer-wireless" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender