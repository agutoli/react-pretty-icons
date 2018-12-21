import React from 'react';
import iconSvg from '../icons/normalized/dns.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__dns" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender