import React from 'react';
import iconSvg from '../icons/normalized/account-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__account-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender