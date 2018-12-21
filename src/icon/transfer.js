import React from 'react';
import iconSvg from '../icons/normalized/transfer.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__transfer" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender