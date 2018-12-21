import React from 'react';
import iconSvg from '../icons/normalized/favorite.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__favorite" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender