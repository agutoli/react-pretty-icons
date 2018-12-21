import React from 'react';
import iconSvg from '../icons/normalized/account-network.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__account-network" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender