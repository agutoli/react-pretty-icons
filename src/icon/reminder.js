import React from 'react';
import iconSvg from '../icons/normalized/reminder.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__reminder" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender