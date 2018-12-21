import React from 'react';
import iconSvg from '../icons/normalized/account-location.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__account-location" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender