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
|   -  |   A   |   B   |   C   |   D   |   E   |   F   |   G   |   H   |   I   |   J   |   K   |   L   |
| :---:| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | 
| 1 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/add.svg.png "add.svg") | | - | add | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/bag.svg.png "bag.svg") | | - | add | bag | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/battery.svg.png "battery.svg") | | - | add | bag | battery | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/bell.svg.png "bell.svg") | | - | add | bag | battery | bell | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/bluetooth.svg.png "bluetooth.svg") | | - | add | bag | battery | bell | bluetooth | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/bookmark.svg.png "bookmark.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/briefcase.svg.png "briefcase.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/calendar.svg.png "calendar.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/cancel-1.svg.png "cancel-1.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/cancel.svg.png "cancel.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/clip.svg.png "clip.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/clock-1.svg.png "clock-1.svg") | 
| - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| 2 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/clock.svg.png "clock.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/cloud.svg.png "cloud.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/correct.svg.png "correct.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/credit-card.svg.png "credit-card.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/cursor-1.svg.png "cursor-1.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/cursor.svg.png "cursor.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/cut.svg.png "cut.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/cutlery.svg.png "cutlery.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/down-arrow.svg.png "down-arrow.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/download.svg.png "download.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/edit.svg.png "edit.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/envelope.svg.png "envelope.svg") | 
| - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| 3 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/export.svg.png "export.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/favorite.svg.png "favorite.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/file.svg.png "file.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/folder.svg.png "folder.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/forward.svg.png "forward.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/gallery.svg.png "gallery.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/gamepad.svg.png "gamepad.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/garbage.svg.png "garbage.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/headphones.svg.png "headphones.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/heart.svg.png "heart.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/help.svg.png "help.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/home.svg.png "home.svg") | 
| - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| 4 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/hourglass.svg.png "hourglass.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/info.svg.png "info.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/layer.svg.png "layer.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/layout.svg.png "layout.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/left-arrow-1.svg.png "left-arrow-1.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/left-arrow.svg.png "left-arrow.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/lightning.svg.png "lightning.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/link.svg.png "link.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/logout.svg.png "logout.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/magnet.svg.png "magnet.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/map.svg.png "map.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/menu.svg.png "menu.svg") | 
| - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| 5 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/monitor.svg.png "monitor.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/moon.svg.png "moon.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/padnote.svg.png "padnote.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/paint.svg.png "paint.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/pause.svg.png "pause.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/photo-camera.svg.png "photo-camera.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/placeholder.svg.png "placeholder.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/play-button.svg.png "play-button.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/power.svg.png "power.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/presentation.svg.png "presentation.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/printer.svg.png "printer.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/profile.svg.png "profile.svg") | 
| - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| 6 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/prohibition.svg.png "prohibition.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/push-pin.svg.png "push-pin.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/puzzle.svg.png "puzzle.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/refresh.svg.png "refresh.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/remove.svg.png "remove.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/rewind.svg.png "rewind.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/right-arrow-1.svg.png "right-arrow-1.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/right-arrow.svg.png "right-arrow.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/rocket-launch.svg.png "rocket-launch.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/screen.svg.png "screen.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/search.svg.png "search.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/settings-1.svg.png "settings-1.svg") | 
| - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| 7 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/settings-2.svg.png "settings-2.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/settings.svg.png "settings.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/share.svg.png "share.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/shield.svg.png "shield.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | shield | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/shopping-cart.svg.png "shopping-cart.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | shield | shopping-cart | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/shutter.svg.png "shutter.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | shield | shopping-cart | shutter | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/smartphone.svg.png "smartphone.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | shield | shopping-cart | shutter | smartphone | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/speech-bubble.svg.png "speech-bubble.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | shield | shopping-cart | shutter | smartphone | speech-bubble | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/speedometer.svg.png "speedometer.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | shield | shopping-cart | shutter | smartphone | speech-bubble | speedometer | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/stats.svg.png "stats.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | shield | shopping-cart | shutter | smartphone | speech-bubble | speedometer | stats | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/store.svg.png "store.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | shield | shopping-cart | shutter | smartphone | speech-bubble | speedometer | stats | store | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/sun.svg.png "sun.svg") | 
| - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | shield | shopping-cart | shutter | smartphone | speech-bubble | speedometer | stats | store | sun | 
| 8 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/switch.svg.png "switch.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | shield | shopping-cart | shutter | smartphone | speech-bubble | speedometer | stats | store | sun | 
| - | switch | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/tag.svg.png "tag.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | shield | shopping-cart | shutter | smartphone | speech-bubble | speedometer | stats | store | sun | 
| - | switch | tag | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/target.svg.png "target.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | shield | shopping-cart | shutter | smartphone | speech-bubble | speedometer | stats | store | sun | 
| - | switch | tag | target | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/timer.svg.png "timer.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | shield | shopping-cart | shutter | smartphone | speech-bubble | speedometer | stats | store | sun | 
| - | switch | tag | target | timer | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/unlock.svg.png "unlock.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | shield | shopping-cart | shutter | smartphone | speech-bubble | speedometer | stats | store | sun | 
| - | switch | tag | target | timer | unlock | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/up-arrow.svg.png "up-arrow.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | shield | shopping-cart | shutter | smartphone | speech-bubble | speedometer | stats | store | sun | 
| - | switch | tag | target | timer | unlock | up-arrow | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/upload.svg.png "upload.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | shield | shopping-cart | shutter | smartphone | speech-bubble | speedometer | stats | store | sun | 
| - | switch | tag | target | timer | unlock | up-arrow | upload | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/video-camera.svg.png "video-camera.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | shield | shopping-cart | shutter | smartphone | speech-bubble | speedometer | stats | store | sun | 
| - | switch | tag | target | timer | unlock | up-arrow | upload | video-camera | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/video.svg.png "video.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | shield | shopping-cart | shutter | smartphone | speech-bubble | speedometer | stats | store | sun | 
| - | switch | tag | target | timer | unlock | up-arrow | upload | video-camera | video | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/visible.svg.png "visible.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | shield | shopping-cart | shutter | smartphone | speech-bubble | speedometer | stats | store | sun | 
| - | switch | tag | target | timer | unlock | up-arrow | upload | video-camera | video | visible | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/voice-recorder.svg.png "voice-recorder.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | shield | shopping-cart | shutter | smartphone | speech-bubble | speedometer | stats | store | sun | 
| - | switch | tag | target | timer | unlock | up-arrow | upload | video-camera | video | visible | voice-recorder | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/volume.svg.png "volume.svg") | 
| - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | shield | shopping-cart | shutter | smartphone | speech-bubble | speedometer | stats | store | sun | 
| - | switch | tag | target | timer | unlock | up-arrow | upload | video-camera | video | visible | voice-recorder | volume | 
| 9 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/waiting.svg.png "waiting.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | shield | shopping-cart | shutter | smartphone | speech-bubble | speedometer | stats | store | sun | 
| - | switch | tag | target | timer | unlock | up-arrow | upload | video-camera | video | visible | voice-recorder | volume | 
| - | waiting | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/wifi.svg.png "wifi.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | shield | shopping-cart | shutter | smartphone | speech-bubble | speedometer | stats | store | sun | 
| - | switch | tag | target | timer | unlock | up-arrow | upload | video-camera | video | visible | voice-recorder | volume | 
| - | waiting | wifi | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/zoom-out.svg.png "zoom-out.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | shield | shopping-cart | shutter | smartphone | speech-bubble | speedometer | stats | store | sun | 
| - | switch | tag | target | timer | unlock | up-arrow | upload | video-camera | video | visible | voice-recorder | volume | 
| - | waiting | wifi | zoom-out | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/zoom.svg.png "zoom.svg") | | - | add | bag | battery | bell | bluetooth | bookmark | briefcase | calendar | cancel-1 | cancel | clip | clock-1 | 
| - | clock | cloud | correct | credit-card | cursor-1 | cursor | cut | cutlery | down-arrow | download | edit | envelope | 
| - | export | favorite | file | folder | forward | gallery | gamepad | garbage | headphones | heart | help | home | 
| - | hourglass | info | layer | layout | left-arrow-1 | left-arrow | lightning | link | logout | magnet | map | menu | 
| - | monitor | moon | padnote | paint | pause | photo-camera | placeholder | play-button | power | presentation | printer | profile | 
| - | prohibition | push-pin | puzzle | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-launch | screen | search | settings-1 | 
| - | settings-2 | settings | share | shield | shopping-cart | shutter | smartphone | speech-bubble | speedometer | stats | store | sun | 
| - | switch | tag | target | timer | unlock | up-arrow | upload | video-camera | video | visible | voice-recorder | volume | 
| - | waiting | wifi | zoom-out | zoom | 