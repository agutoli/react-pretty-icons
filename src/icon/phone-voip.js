import React from 'react';
import iconSvg from '../icons/normalized/phone-voip.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__phone-voip" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender