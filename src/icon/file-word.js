import React from 'react';
import iconSvg from '../icons/normalized/file-word.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-word" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender