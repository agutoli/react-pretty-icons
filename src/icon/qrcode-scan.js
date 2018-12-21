import React from 'react';
import iconSvg from '../icons/normalized/qrcode-scan.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__qrcode-scan" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender