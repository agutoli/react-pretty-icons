import React from 'react';
import iconSvg from '../icons/normalized/train-car.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__train-car" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender