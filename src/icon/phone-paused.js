import React from 'react';
import iconSvg from '../icons/normalized/phone-paused.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__phone-paused" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender