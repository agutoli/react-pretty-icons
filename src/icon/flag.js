import React from 'react';
import iconSvg from '../icons/normalized/flag.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__flag" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender