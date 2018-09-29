# SVG Icons

You dont need to use any ~~webpack loader~~ (I swear) with this package, is a lightweight library which uses just `javascript`. Is just install and import it.

### How it works?

We are using `babel-plugin-inline-react-svg` to convert svg to javascript, so we dont need svg loader any more.

##### But, is not that a bad way to do that?
No, it's a good way! Because we are including each icon "on demand", ex. When you import a icon, we are loading just this specifically icon.

### The Ideia

    react-pretty-icons.js
    render() {
        const { name } = this.props;
        const icon = require(name + '.svg');
        ....
    }

    your-code.js
    render() {
      return (
          <Icon name="icon_name" />
      );
    }

### Install

`npm install react-pretty-icons --save`

### Development
`brew install -v librsvg`

`git clone git@github.com:agutoli/react-pretty-icons.git`

`npm install`

`cp -R ./hooks/* ./.git/hooks/; chmod -R +x ./.git/hooks`

### Usage

    import Icon from 'react-pretty-icons';
    ...
    class MyReactComp extends React.Component {
       render() {
         return (
           <div>
             <Icon
              name="facebook_clr"
              className="my-prefix__icons" />
           </div>   
         );
       }
    }

### How can I add a new icon?

Guy, It's ridiculously simple, just move your icon to `./src/new_icons/your_new_icon.svg` and `git add .` and `git commit -m "you message"`.

After your commit it will run each step automatecaly
    * Convert svg icon to javascript (auto)
    * Update this README with the new icons (auto)
    * Normalize the icons for the same size 32x32 (auto)
    * After commit, the Pipelines will upload theses new icons to amazon `s3`


### CREDITS
#### Free Basic UI Elements

* Site: https://www.flaticon.com/authors/lucy-g
* Author: Lucy G. https://bylucyg.com/
* License: CC 3.0 BY

### Icon Pack
