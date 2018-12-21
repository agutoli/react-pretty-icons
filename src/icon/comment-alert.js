import React from 'react';
import iconSvg from '../icons/normalized/comment-alert.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__comment-alert" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender