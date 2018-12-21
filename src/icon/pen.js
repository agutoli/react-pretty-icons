import React from 'react';
import iconSvg from '../icons/normalized/pen.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pen" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender