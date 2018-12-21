import React from 'react';
import iconSvg from '../icons/normalized/comment-multiple.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__comment-multiple" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender