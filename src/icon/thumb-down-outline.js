import React from 'react';
import iconSvg from '../icons/normalized/thumb-down-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__thumb-down-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender