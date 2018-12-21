import React from 'react';
import iconSvg from '../icons/normalized/theater.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__theater" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender