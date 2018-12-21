import React from 'react';
import iconSvg from '../icons/normalized/tab-unselected.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tab-unselected" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender