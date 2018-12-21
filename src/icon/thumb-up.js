import React from 'react';
import iconSvg from '../icons/normalized/thumb-up.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__thumb-up" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender