import React from 'react';
import iconSvg from '../icons/normalized/auto-fix.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__auto-fix" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender