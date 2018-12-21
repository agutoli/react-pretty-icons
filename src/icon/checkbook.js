import React from 'react';
import iconSvg from '../icons/normalized/checkbook.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__checkbook" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender