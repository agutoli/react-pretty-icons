import React from 'react';
import iconSvg from '../icons/normalized/webpack.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__webpack" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender