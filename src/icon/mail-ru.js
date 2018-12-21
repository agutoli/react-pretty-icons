import React from 'react';
import iconSvg from '../icons/normalized/mail-ru.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__mail-ru" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender