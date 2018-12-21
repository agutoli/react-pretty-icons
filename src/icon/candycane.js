import React from 'react';
import iconSvg from '../icons/normalized/candycane.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__candycane" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender