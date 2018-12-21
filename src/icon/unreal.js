import React from 'react';
import iconSvg from '../icons/normalized/unreal.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__unreal" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender