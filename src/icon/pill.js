import React from 'react';
import iconSvg from '../icons/normalized/pill.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pill" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender