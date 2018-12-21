import React from 'react';
import iconSvg from '../icons/normalized/dog-service.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__dog-service" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender