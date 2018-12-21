import React from 'react';
import iconSvg from '../icons/normalized/hops.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hops" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender