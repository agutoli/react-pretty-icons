import React from 'react';
import iconSvg from '../icons/normalized/account-child-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__account-child-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender