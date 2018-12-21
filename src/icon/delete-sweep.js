import React from 'react';
import iconSvg from '../icons/normalized/delete-sweep.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__delete-sweep" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender