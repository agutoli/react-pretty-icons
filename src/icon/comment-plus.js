import React from 'react';
import iconSvg from '../icons/normalized/comment-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__comment-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender