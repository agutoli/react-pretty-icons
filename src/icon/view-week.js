import React from 'react';
import iconSvg from '../icons/normalized/view-week.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__view-week" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender