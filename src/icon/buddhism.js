import React from 'react';
import iconSvg from '../icons/normalized/buddhism.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__buddhism" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender