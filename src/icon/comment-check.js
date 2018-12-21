import React from 'react';
import iconSvg from '../icons/normalized/comment-check.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__comment-check" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender