import React from 'react';
import iconSvg from '../icons/normalized/blackberry.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__blackberry" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender