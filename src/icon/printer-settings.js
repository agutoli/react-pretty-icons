import React from 'react';
import iconSvg from '../icons/normalized/printer-settings.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__printer-settings" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender