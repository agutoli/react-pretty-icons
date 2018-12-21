import React from 'react';
import iconSvg from '../icons/normalized/current-dc.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__current-dc" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender