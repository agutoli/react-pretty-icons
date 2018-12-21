import React from 'react';
import iconSvg from '../icons/normalized/logout.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__logout" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender