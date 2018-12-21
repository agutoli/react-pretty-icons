import React from 'react';
import iconSvg from '../icons/normalized/google-physical-web.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__google-physical-web" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender