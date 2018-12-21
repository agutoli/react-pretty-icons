import React from 'react';
import iconSvg from '../icons/normalized/behance.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__behance" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender