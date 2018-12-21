import React from 'react';
import iconSvg from '../icons/normalized/read.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__read" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender