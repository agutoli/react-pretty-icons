import React from 'react';
import iconSvg from '../icons/normalized/globe-model.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__globe-model" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender