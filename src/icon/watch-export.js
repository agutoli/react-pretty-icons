import React from 'react';
import iconSvg from '../icons/normalized/watch-export.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__watch-export" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender