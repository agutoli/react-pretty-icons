import React from 'react';
import iconSvg from '../icons/normalized/google-circles-extended.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__google-circles-extended" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender