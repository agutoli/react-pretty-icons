import React from 'react';
import iconSvg from '../icons/normalized/golf.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__golf" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender