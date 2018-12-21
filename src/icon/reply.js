import React from 'react';
import iconSvg from '../icons/normalized/reply.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__reply" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender