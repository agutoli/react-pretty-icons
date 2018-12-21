import React from 'react';
import iconSvg from '../icons/normalized/tumblr.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tumblr" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender