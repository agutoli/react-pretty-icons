import React from 'react';
import iconSvg from '../icons/normalized/silverware-fork.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__silverware-fork" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender