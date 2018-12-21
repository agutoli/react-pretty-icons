import React from 'react';
import iconSvg from '../icons/normalized/comment-account-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__comment-account-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender