import React from 'react';
import iconSvg from '../icons/normalized/jquery.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__jquery" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender