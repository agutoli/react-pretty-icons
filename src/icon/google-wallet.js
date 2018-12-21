import React from 'react';
import iconSvg from '../icons/normalized/google-wallet.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__google-wallet" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender