import React from 'react';
import iconSvg from '../icons/normalized/tumblr-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tumblr-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender