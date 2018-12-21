import React from 'react';
import iconSvg from '../icons/normalized/shoe-formal.svg';

function IconRender() {
  const paths = /^\<svg [^>]+\>(.*)<\/svg>/ig.exec(iconSvg)[1]
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      baseProfile="full"
      viewBox="0 0 24 24"
      className="react-pretty-icons react-pretty-icons__shoe-formal"
      dangerouslySetInnerHTML={{__html: paths}} />
  )
}
export default IconRender