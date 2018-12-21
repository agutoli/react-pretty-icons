import React from 'react';
import iconSvg from '../icons/normalized/google-earth.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__google-earth" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender