import React from 'react';
import iconSvg from '../icons/normalized/left-arrow.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__left-arrow" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender