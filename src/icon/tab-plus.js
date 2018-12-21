import React from 'react';
import iconSvg from '../icons/normalized/tab-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tab-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender