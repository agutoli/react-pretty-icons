import React from 'react';
import iconSvg from '../icons/normalized/coin.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__coin" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender