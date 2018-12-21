import React from 'react';
import iconSvg from '../icons/normalized/currency-btc.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__currency-btc" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender