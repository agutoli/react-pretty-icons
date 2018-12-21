import React from 'react';
import iconSvg from '../icons/normalized/yammer.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__yammer" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender