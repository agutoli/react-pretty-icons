import React from 'react';
import iconSvg from '../icons/normalized/wallet-giftcard.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__wallet-giftcard" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender