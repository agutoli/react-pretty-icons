import React from 'react';
import iconSvg from '../icons/normalized/format-paragraph.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-paragraph" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender