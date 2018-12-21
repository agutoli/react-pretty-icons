import React from 'react';
import iconSvg from '../icons/normalized/ticket-confirmation.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ticket-confirmation" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender