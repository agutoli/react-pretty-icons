import React from 'react';
import iconSvg from '../icons/normalized/grid-large.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__grid-large" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender