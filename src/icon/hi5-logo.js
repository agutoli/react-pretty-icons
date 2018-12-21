import React from 'react';
import iconSvg from '../icons/normalized/hi5-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hi5-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender