import React from 'react';
import iconSvg from '../icons/normalized/numeric-5-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__numeric-5-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender