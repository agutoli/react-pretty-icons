import React from 'react';
import iconSvg from '../icons/normalized/call-received.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__call-received" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender