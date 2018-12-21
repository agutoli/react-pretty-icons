import React from 'react';
import iconSvg from '../icons/normalized/account-check.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__account-check" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender