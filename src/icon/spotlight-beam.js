import React from 'react';
import iconSvg from '../icons/normalized/spotlight-beam.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__spotlight-beam" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender