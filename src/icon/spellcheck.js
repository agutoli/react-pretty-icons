import React from 'react';
import iconSvg from '../icons/normalized/spellcheck.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__spellcheck" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender