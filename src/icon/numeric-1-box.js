import React from 'react';
import iconSvg from '../icons/normalized/numeric-1-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__numeric-1-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender