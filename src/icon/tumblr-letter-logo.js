import React from 'react';
import iconSvg from '../icons/normalized/tumblr-letter-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tumblr-letter-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender