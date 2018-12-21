import React from 'react';
import iconSvg from '../icons/normalized/account-box-multiple.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__account-box-multiple" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender