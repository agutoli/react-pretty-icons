import React from 'react';
import iconSvg from '../icons/normalized/priority-high.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__priority-high" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender