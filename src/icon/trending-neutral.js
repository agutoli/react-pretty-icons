import React from 'react';
import iconSvg from '../icons/normalized/trending-neutral.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__trending-neutral" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender