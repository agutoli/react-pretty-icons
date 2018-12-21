import React from 'react';
import iconSvg from '../icons/normalized/threewordsme-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__threewordsme-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender