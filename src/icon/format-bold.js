import React from 'react';
import iconSvg from '../icons/normalized/format-bold.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-bold" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender