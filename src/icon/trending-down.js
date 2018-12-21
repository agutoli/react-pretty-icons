import React from 'react';
import iconSvg from '../icons/normalized/trending-down.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__trending-down" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender