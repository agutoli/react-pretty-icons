import React from 'react';
import iconSvg from '../icons/normalized/select-inverse.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__select-inverse" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender