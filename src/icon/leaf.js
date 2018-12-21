import React from 'react';
import iconSvg from '../icons/normalized/leaf.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__leaf" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender