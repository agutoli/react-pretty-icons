import React from 'react';
import iconSvg from '../icons/normalized/forum-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__forum-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender