import React from 'react';
import iconSvg from '../icons/normalized/google-keep.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__google-keep" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender