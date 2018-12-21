import React from 'react';
import iconSvg from '../icons/normalized/coroflot-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__coroflot-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender