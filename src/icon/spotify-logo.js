import React from 'react';
import iconSvg from '../icons/normalized/spotify-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__spotify-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender