import React from 'react';
import iconSvg from '../icons/normalized/linkedin-logo-button.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__linkedin-logo-button" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender