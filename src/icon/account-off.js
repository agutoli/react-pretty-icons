import React from 'react';
import iconSvg from '../icons/normalized/account-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__account-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender