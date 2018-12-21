import React from 'react';
import iconSvg from '../icons/normalized/select-all.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__select-all" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender