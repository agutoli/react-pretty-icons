import React from 'react';
import iconSvg from '../icons/normalized/account-supervisor-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__account-supervisor-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender