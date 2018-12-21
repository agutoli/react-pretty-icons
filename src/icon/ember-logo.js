import React from 'react';
import iconSvg from '../icons/normalized/ember-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ember-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender