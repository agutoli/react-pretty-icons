import React from 'react';
import iconSvg from '../icons/normalized/shuffle-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__shuffle-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender