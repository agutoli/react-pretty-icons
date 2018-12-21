import React from 'react';
import iconSvg from '../icons/normalized/bio.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bio" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender