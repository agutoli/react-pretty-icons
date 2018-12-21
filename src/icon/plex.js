import React from 'react';
import iconSvg from '../icons/normalized/plex.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__plex" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender