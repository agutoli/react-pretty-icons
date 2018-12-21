import React from 'react';
import iconSvg from '../icons/normalized/check-all.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__check-all" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender