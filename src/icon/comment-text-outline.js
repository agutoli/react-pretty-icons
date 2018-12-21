import React from 'react';
import iconSvg from '../icons/normalized/comment-text-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__comment-text-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender