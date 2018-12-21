import React from 'react';
import iconSvg from '../icons/normalized/bluetooth-transfer.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bluetooth-transfer" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender