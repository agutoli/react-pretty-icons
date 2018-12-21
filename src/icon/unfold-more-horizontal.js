import React from 'react';
import iconSvg from '../icons/normalized/unfold-more-horizontal.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__unfold-more-horizontal" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender