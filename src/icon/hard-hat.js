import React from 'react';
import iconSvg from '../icons/normalized/hard-hat.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hard-hat" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender