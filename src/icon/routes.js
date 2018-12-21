import React from 'react';
import iconSvg from '../icons/normalized/routes.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__routes" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender