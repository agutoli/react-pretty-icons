import React from 'react';
import iconSvg from '../icons/normalized/tooth-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tooth-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender