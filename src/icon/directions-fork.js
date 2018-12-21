import React from 'react';
import iconSvg from '../icons/normalized/directions-fork.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__directions-fork" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender