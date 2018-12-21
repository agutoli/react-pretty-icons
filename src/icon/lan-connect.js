import React from 'react';
import iconSvg from '../icons/normalized/lan-connect.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__lan-connect" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender