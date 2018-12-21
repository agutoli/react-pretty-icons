import React from 'react';
import iconSvg from '../icons/normalized/bandcamp.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bandcamp" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender