import React from 'react';
import iconSvg from '../icons/normalized/account-arrow-left.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__account-arrow-left" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender