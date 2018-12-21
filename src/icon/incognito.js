import React from 'react';
import iconSvg from '../icons/normalized/incognito.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__incognito" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender