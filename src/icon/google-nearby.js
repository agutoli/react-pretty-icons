import React from 'react';
import iconSvg from '../icons/normalized/google-nearby.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__google-nearby" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender