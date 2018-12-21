import React from 'react';
import iconSvg from '../icons/normalized/wallet-travel.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__wallet-travel" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender