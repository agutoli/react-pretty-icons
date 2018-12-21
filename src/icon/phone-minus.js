import React from 'react';
import iconSvg from '../icons/normalized/phone-minus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__phone-minus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender