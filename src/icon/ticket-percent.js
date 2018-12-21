import React from 'react';
import iconSvg from '../icons/normalized/ticket-percent.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ticket-percent" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender