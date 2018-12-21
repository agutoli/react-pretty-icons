import React from 'react';
import iconSvg from '../icons/normalized/dice-d12.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__dice-d12" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender