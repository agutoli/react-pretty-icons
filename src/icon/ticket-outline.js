import React from 'react';
import iconSvg from '../icons/normalized/ticket-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ticket-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender