import React from 'react';
import iconSvg from '../icons/normalized/account-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__account-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender