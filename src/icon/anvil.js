import React from 'react';
import iconSvg from '../icons/normalized/anvil.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__anvil" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender