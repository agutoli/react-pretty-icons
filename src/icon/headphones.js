import React from 'react';
import iconSvg from '../icons/normalized/headphones.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__headphones" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender