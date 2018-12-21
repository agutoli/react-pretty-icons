import React from 'react';
import iconSvg from '../icons/normalized/border-bottom.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__border-bottom" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender