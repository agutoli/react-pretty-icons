import React from 'react';
import iconSvg from '../icons/normalized/tor.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tor" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender