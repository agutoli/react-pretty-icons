import React from 'react';
import iconSvg from '../icons/normalized/tumblr-logo-button.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tumblr-logo-button" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender