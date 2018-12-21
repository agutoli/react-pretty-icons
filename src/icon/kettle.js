import React from 'react';
import iconSvg from '../icons/normalized/kettle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__kettle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender