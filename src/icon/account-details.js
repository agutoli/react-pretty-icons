import React from 'react';
import iconSvg from '../icons/normalized/account-details.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__account-details" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender