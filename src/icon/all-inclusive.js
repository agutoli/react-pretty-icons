import React from 'react';
import iconSvg from '../icons/normalized/all-inclusive.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__all-inclusive" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender