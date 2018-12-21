import React from 'react';
import iconSvg from '../icons/normalized/page-last.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__page-last" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender