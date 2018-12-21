import React from 'react';
import iconSvg from '../icons/normalized/calendar-star.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__calendar-star" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender