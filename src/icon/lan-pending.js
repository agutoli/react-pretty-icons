import React from 'react';
import iconSvg from '../icons/normalized/lan-pending.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__lan-pending" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender