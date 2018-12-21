import React from 'react';
import iconSvg from '../icons/normalized/diigo-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__diigo-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender