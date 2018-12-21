import React from 'react';
import iconSvg from '../icons/normalized/view-day.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__view-day" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender