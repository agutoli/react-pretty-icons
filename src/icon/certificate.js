import React from 'react';
import iconSvg from '../icons/normalized/certificate.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__certificate" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender