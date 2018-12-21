import React from 'react';
import iconSvg from '../icons/normalized/numeric-10-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__numeric-10-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender