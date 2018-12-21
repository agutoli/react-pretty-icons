import React from 'react';
import iconSvg from '../icons/normalized/account-switch.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__account-switch" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender