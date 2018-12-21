import React from 'react';
import iconSvg from '../icons/normalized/phone-outgoing.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__phone-outgoing" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender