import React from 'react';
import iconSvg from '../icons/normalized/select-compare.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__select-compare" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender