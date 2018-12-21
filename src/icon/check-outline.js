import React from 'react';
import iconSvg from '../icons/normalized/check-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__check-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender