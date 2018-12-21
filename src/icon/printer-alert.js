import React from 'react';
import iconSvg from '../icons/normalized/printer-alert.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__printer-alert" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender