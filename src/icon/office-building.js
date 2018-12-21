import React from 'react';
import iconSvg from '../icons/normalized/office-building.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__office-building" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender