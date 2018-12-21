import React from 'react';
import iconSvg from '../icons/normalized/worker.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__worker" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender