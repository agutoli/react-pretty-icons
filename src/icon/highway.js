import React from 'react';
import iconSvg from '../icons/normalized/highway.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__highway" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender