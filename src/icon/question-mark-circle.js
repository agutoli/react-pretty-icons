import React from 'react';
import iconSvg from '../icons/normalized/question-mark-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__question-mark-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender