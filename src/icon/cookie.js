import React from 'react';
import iconSvg from '../icons/normalized/cookie.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cookie" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender