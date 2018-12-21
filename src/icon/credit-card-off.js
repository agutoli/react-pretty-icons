import React from 'react';
import iconSvg from '../icons/normalized/credit-card-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__credit-card-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender