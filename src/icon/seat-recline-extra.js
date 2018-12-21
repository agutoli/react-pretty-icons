import React from 'react';
import iconSvg from '../icons/normalized/seat-recline-extra.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__seat-recline-extra" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender