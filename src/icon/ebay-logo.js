import React from 'react';
import iconSvg from '../icons/normalized/ebay-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ebay-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender