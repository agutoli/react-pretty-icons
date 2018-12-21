import React from 'react';
import iconSvg from '../icons/normalized/digg-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__digg-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender