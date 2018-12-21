import React from 'react';
import iconSvg from '../icons/normalized/transcribe.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__transcribe" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender