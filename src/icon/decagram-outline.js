import React from 'react';
import iconSvg from '../icons/normalized/decagram-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__decagram-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender