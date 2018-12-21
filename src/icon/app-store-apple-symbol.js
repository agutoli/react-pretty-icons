import React from 'react';
import iconSvg from '../icons/normalized/app-store-apple-symbol.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__app-store-apple-symbol" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender