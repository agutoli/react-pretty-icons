import React from 'react';
import iconSvg from '../icons/normalized/stackexchange.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__stackexchange" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender