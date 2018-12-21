import React from 'react';
import iconSvg from '../icons/normalized/bootstrap.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bootstrap" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender