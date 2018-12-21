import React from 'react';
import iconSvg from '../icons/normalized/priority-low.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__priority-low" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender