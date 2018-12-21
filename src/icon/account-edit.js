import React from 'react';
import iconSvg from '../icons/normalized/account-edit.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__account-edit" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender