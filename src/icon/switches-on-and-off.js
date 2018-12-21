import React from 'react';
import iconSvg from '../icons/normalized/switches-on-and-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__switches-on-and-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender