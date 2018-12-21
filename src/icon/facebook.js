import React from 'react';
import iconSvg from '../icons/normalized/facebook.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__facebook" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender