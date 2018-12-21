import React from 'react';
import iconSvg from '../icons/normalized/silverware-fork-knife.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__silverware-fork-knife" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender