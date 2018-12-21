import React from 'react';
import iconSvg from '../icons/normalized/dna.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__dna" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender