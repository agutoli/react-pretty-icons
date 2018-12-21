import React from 'react';
import iconSvg from '../icons/normalized/target-account.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__target-account" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender