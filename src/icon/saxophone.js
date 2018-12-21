import React from 'react';
import iconSvg from '../icons/normalized/saxophone.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__saxophone" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender