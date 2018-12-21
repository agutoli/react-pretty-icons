import React from 'react';
import iconSvg from '../icons/normalized/barcode-scan.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__barcode-scan" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender