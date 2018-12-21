import React from 'react';
import iconSvg from '../icons/normalized/popcorn.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__popcorn" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender