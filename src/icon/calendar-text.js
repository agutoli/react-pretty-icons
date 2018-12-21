import React from 'react';
import iconSvg from '../icons/normalized/calendar-text.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__calendar-text" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender