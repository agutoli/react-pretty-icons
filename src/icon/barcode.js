import React from 'react';
import iconSvg from '../icons/normalized/barcode.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__barcode" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender