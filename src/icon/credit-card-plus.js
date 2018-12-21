import React from 'react';
import iconSvg from '../icons/normalized/credit-card-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__credit-card-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender