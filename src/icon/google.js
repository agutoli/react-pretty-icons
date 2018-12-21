import React from 'react';
import iconSvg from '../icons/normalized/google.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__google" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender