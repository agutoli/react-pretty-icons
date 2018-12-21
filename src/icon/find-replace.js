import React from 'react';
import iconSvg from '../icons/normalized/find-replace.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__find-replace" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender