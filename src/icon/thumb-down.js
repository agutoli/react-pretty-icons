import React from 'react';
import iconSvg from '../icons/normalized/thumb-down.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__thumb-down" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender