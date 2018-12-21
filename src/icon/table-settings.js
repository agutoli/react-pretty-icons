import React from 'react';
import iconSvg from '../icons/normalized/table-settings.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__table-settings" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender