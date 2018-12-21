import React from 'react';
import iconSvg from '../icons/normalized/exit-run.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__exit-run" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender