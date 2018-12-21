import React from 'react';
import iconSvg from '../icons/normalized/linode.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__linode" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender