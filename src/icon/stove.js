import React from 'react';
import iconSvg from '../icons/normalized/stove.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__stove" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender