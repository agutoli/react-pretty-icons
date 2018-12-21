import React from 'react';
import iconSvg from '../icons/normalized/format-wrap-top-bottom.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-wrap-top-bottom" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender