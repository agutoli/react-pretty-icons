import React from 'react';
import iconSvg from '../icons/normalized/format-pilcrow.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-pilcrow" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender