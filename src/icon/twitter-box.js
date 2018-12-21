import React from 'react';
import iconSvg from '../icons/normalized/twitter-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__twitter-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender