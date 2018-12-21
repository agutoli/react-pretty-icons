import React from 'react';
import iconSvg from '../icons/normalized/comment-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__comment-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender