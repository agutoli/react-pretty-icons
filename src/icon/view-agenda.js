import React from 'react';
import iconSvg from '../icons/normalized/view-agenda.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__view-agenda" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender