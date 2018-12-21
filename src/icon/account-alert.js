import React from 'react';
import iconSvg from '../icons/normalized/account-alert.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__account-alert" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender