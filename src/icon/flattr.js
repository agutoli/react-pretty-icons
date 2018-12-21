import React from 'react';
import iconSvg from '../icons/normalized/flattr.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__flattr" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender