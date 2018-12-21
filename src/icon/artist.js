import React from 'react';
import iconSvg from '../icons/normalized/artist.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__artist" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender