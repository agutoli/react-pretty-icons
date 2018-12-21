import React from 'react';
import iconSvg from '../icons/normalized/twitter-logo-button.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__twitter-logo-button" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender