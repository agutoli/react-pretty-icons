import React from 'react';
import iconSvg from '../icons/normalized/dots-horizontal-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__dots-horizontal-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender