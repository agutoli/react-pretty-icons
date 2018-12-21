import React from 'react';
import iconSvg from '../icons/normalized/checkerboard.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__checkerboard" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender