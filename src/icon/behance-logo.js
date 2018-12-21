import React from 'react';
import iconSvg from '../icons/normalized/behance-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__behance-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender