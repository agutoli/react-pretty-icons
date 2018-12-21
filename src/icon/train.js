import React from 'react';
import iconSvg from '../icons/normalized/train.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__train" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender