import React from 'react';
import iconSvg from '../icons/normalized/guitar-acoustic.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__guitar-acoustic" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender