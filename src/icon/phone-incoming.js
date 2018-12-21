import React from 'react';
import iconSvg from '../icons/normalized/phone-incoming.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__phone-incoming" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender