import React from 'react';
import iconSvg from '../icons/normalized/delta.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__delta" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender