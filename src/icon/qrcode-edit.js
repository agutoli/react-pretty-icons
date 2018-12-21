import React from 'react';
import iconSvg from '../icons/normalized/qrcode-edit.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__qrcode-edit" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender