import React from 'react';
import iconSvg from '../icons/normalized/flag-triangle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__flag-triangle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender