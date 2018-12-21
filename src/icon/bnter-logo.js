import React from 'react';
import iconSvg from '../icons/normalized/bnter-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bnter-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender