import React from 'react';
import iconSvg from '../icons/normalized/facebook-logo-button.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__facebook-logo-button" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender