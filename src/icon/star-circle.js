import React from 'react';
import iconSvg from '../icons/normalized/star-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__star-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender