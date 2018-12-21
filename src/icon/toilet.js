import React from 'react';
import iconSvg from '../icons/normalized/toilet.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__toilet" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender