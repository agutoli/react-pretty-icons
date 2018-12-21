import React from 'react';
import iconSvg from '../icons/normalized/markdown.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__markdown" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender