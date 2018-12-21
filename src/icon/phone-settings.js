import React from 'react';
import iconSvg from '../icons/normalized/phone-settings.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__phone-settings" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender