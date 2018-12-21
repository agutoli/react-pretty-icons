import React from 'react';
import iconSvg from '../icons/normalized/receipt.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__receipt" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender