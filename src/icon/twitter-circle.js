import React from 'react';
import iconSvg from '../icons/normalized/twitter-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__twitter-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender