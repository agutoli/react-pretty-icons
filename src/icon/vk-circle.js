import React from 'react';
import iconSvg from '../icons/normalized/vk-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__vk-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender