import React from 'react';
import iconSvg from '../icons/normalized/unfold-less-horizontal.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__unfold-less-horizontal" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender