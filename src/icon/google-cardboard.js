import React from 'react';
import iconSvg from '../icons/normalized/google-cardboard.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__google-cardboard" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender