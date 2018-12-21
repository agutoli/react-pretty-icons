import React from 'react';
import iconSvg from '../icons/normalized/minecraft.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__minecraft" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender