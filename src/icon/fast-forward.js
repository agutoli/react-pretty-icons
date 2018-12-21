import React from 'react';
import iconSvg from '../icons/normalized/fast-forward.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__fast-forward" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender