import React from 'react';
import iconSvg from '../icons/normalized/phone-bluetooth.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__phone-bluetooth" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender