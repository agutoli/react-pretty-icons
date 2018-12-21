import React from 'react';
import iconSvg from '../icons/normalized/creative-commons-license-symbol.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__creative-commons-license-symbol" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender