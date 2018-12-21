import React from 'react';
import iconSvg from '../icons/normalized/comment-remove-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__comment-remove-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender