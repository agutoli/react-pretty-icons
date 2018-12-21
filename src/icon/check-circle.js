import React from 'react';
import iconSvg from '../icons/normalized/check-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__check-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender