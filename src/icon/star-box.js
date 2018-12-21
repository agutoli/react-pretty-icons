import React from 'react';
import iconSvg from '../icons/normalized/star-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__star-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender