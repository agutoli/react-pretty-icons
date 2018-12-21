import React from 'react';
import iconSvg from '../icons/normalized/comment-search.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__comment-search" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender