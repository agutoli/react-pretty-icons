import React from 'react';
import iconSvg from '../icons/normalized/tablet.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tablet" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender