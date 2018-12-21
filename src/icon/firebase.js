import React from 'react';
import iconSvg from '../icons/normalized/firebase.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__firebase" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender