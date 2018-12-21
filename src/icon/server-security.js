import React from 'react';
import iconSvg from '../icons/normalized/server-security.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__server-security" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender