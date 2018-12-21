import React from 'react';
import iconSvg from '../icons/normalized/baidu-paw-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__baidu-paw-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender