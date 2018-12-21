import React from 'react';
import iconSvg from '../icons/normalized/google-maps.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__google-maps" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender