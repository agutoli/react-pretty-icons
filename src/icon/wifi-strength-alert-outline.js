import React from 'react';
import iconSvg from '../icons/normalized/wifi-strength-alert-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__wifi-strength-alert-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender