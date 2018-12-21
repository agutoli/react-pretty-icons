import React from 'react';
import iconSvg from '../icons/normalized/silverware-spoon.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__silverware-spoon" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender