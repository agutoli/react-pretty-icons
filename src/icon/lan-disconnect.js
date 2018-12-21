import React from 'react';
import iconSvg from '../icons/normalized/lan-disconnect.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__lan-disconnect" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender