import React from 'react';
import iconSvg from '../icons/normalized/office.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__office" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender