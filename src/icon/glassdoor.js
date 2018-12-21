import React from 'react';
import iconSvg from '../icons/normalized/glassdoor.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__glassdoor" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender