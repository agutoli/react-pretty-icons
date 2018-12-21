import React from 'react';
import iconSvg from '../icons/normalized/comment-arrow-left.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__comment-arrow-left" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender