import React from 'react';
import iconSvg from '../icons/normalized/lightning.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__lightning" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender