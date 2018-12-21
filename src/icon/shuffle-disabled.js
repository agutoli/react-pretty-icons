import React from 'react';
import iconSvg from '../icons/normalized/shuffle-disabled.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__shuffle-disabled" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender