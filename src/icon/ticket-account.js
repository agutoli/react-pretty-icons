import React from 'react';
import iconSvg from '../icons/normalized/ticket-account.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ticket-account" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender