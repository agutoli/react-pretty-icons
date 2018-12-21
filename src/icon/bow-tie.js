import React from 'react';
import iconSvg from '../icons/normalized/bow-tie.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bow-tie" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender