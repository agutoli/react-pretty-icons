import React from 'react';
import iconSvg from '../icons/normalized/wallet.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__wallet" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender