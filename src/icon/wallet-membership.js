import React from 'react';
import iconSvg from '../icons/normalized/wallet-membership.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__wallet-membership" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender