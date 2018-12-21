import React from 'react';
import iconSvg from '../icons/normalized/heart-black-shape-for-love.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__heart-black-shape-for-love" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender