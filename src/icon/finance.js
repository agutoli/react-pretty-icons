import React from 'react';
import iconSvg from '../icons/normalized/finance.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__finance" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender