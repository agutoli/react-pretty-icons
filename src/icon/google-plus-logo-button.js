import React from 'react';
import iconSvg from '../icons/normalized/google-plus-logo-button.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__google-plus-logo-button" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender