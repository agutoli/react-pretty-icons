import React from 'react';
import iconSvg from '../icons/normalized/open-in-new.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__open-in-new" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender