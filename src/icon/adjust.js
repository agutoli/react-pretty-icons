import React from 'react';
import iconSvg from '../icons/normalized/adjust.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__adjust" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender