import React from 'react';
import iconSvg from '../icons/normalized/google-home.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__google-home" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender