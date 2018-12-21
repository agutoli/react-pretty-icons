import React from 'react';
import iconSvg from '../icons/normalized/linkedin-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__linkedin-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender