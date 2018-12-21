import React from 'react';
import iconSvg from '../icons/normalized/metacafe-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__metacafe-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender