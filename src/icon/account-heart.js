import React from 'react';
import iconSvg from '../icons/normalized/account-heart.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__account-heart" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender