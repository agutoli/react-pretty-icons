import React from 'react';
import iconSvg from '../icons/normalized/call-made.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__call-made" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender