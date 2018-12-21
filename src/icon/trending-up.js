import React from 'react';
import iconSvg from '../icons/normalized/trending-up.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__trending-up" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender