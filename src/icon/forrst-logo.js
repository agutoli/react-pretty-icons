import React from 'react';
import iconSvg from '../icons/normalized/forrst-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__forrst-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender