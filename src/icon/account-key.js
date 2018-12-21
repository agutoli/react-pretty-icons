import React from 'react';
import iconSvg from '../icons/normalized/account-key.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__account-key" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender