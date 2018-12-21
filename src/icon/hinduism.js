import React from 'react';
import iconSvg from '../icons/normalized/hinduism.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hinduism" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender