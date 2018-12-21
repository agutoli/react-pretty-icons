import React from 'react';
import iconSvg from '../icons/normalized/ungroup.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ungroup" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender