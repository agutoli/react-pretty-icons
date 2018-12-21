import React from 'react';
import iconSvg from '../icons/normalized/comment-remove.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__comment-remove" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender