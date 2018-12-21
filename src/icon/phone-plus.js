import React from 'react';
import iconSvg from '../icons/normalized/phone-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__phone-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender