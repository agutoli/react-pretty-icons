import React from 'react';
import iconSvg from '../icons/normalized/fire-truck.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__fire-truck" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender