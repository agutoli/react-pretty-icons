import React from 'react';
import iconSvg from '../icons/normalized/ballot.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ballot" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender