import React from 'react';
import iconSvg from '../icons/normalized/rabbit.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__rabbit" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender