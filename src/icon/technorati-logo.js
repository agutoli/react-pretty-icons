import React from 'react';
import iconSvg from '../icons/normalized/technorati-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__technorati-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender