import React from 'react';
import iconSvg from '../icons/normalized/file-question.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-question" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender