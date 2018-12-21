import React from 'react';
import iconSvg from '../icons/normalized/account-remove.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__account-remove" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender