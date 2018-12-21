import React from 'react';
import iconSvg from '../icons/normalized/cached.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cached" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender