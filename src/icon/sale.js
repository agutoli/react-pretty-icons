import React from 'react';
import iconSvg from '../icons/normalized/sale.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sale" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender