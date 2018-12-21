import React from 'react';
import iconSvg from '../icons/normalized/bluetooth-settings.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bluetooth-settings" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender