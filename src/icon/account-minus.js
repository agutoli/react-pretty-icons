import React from 'react';
import iconSvg from '../icons/normalized/account-minus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__account-minus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender