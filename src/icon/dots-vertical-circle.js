import React from 'react';
import iconSvg from '../icons/normalized/dots-vertical-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__dots-vertical-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender