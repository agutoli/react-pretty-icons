import React from 'react';
import iconSvg from '../icons/normalized/account-card-details.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__account-card-details" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender