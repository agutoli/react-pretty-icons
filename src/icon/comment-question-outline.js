import React from 'react';
import iconSvg from '../icons/normalized/comment-question-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__comment-question-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender