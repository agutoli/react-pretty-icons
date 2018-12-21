import React from 'react';
import iconSvg from '../icons/normalized/ember.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ember" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender