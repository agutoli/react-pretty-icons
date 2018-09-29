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

### Icon Pack
#### Free Basic UI Elements

https://www.flaticon.com/authors/lucy-g
https://bylucyg.com/
License: CC 3.0 BY
|   -  |   A   |   B   |   C   |   D   |   E   |   F   |   G   |   H   |   I   |   J   |   K   |   L   |
| :---:| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | 
| 1 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/add.svg.png "add.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/bag.svg.png "bag.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/battery.svg.png "battery.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/bell.svg.png "bell.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/bluetooth.svg.png "bluetooth.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/bookmark.svg.png "bookmark.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/briefcase.svg.png "briefcase.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/calendar.svg.png "calendar.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/cancel-1.svg.png "cancel-1.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/cancel.svg.png "cancel.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/clip.svg.png "clip.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/clock-1.svg.png "clock-1.svg") | 
| 2 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/clock.svg.png "clock.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/cloud.svg.png "cloud.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/correct.svg.png "correct.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/credit-card.svg.png "credit-card.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/cursor-1.svg.png "cursor-1.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/cursor.svg.png "cursor.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/cut.svg.png "cut.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/cutlery.svg.png "cutlery.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/down-arrow.svg.png "down-arrow.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/download.svg.png "download.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/edit.svg.png "edit.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/envelope.svg.png "envelope.svg") | 
| 3 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/export.svg.png "export.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/favorite.svg.png "favorite.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/file.svg.png "file.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/folder.svg.png "folder.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/forward.svg.png "forward.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/gallery.svg.png "gallery.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/gamepad.svg.png "gamepad.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/garbage.svg.png "garbage.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/headphones.svg.png "headphones.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/heart.svg.png "heart.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/help.svg.png "help.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/home.svg.png "home.svg") | 
| 4 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/hourglass.svg.png "hourglass.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/info.svg.png "info.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/layer.svg.png "layer.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/layout.svg.png "layout.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/left-arrow-1.svg.png "left-arrow-1.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/left-arrow.svg.png "left-arrow.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/lightning.svg.png "lightning.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/link.svg.png "link.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/logout.svg.png "logout.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/magnet.svg.png "magnet.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/map.svg.png "map.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/menu.svg.png "menu.svg") | 
| 5 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/monitor.svg.png "monitor.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/moon.svg.png "moon.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/padnote.svg.png "padnote.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/paint.svg.png "paint.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/pause.svg.png "pause.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/photo-camera.svg.png "photo-camera.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/placeholder.svg.png "placeholder.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/play-button.svg.png "play-button.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/power.svg.png "power.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/presentation.svg.png "presentation.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/printer.svg.png "printer.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/profile.svg.png "profile.svg") | 
| 6 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/prohibition.svg.png "prohibition.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/push-pin.svg.png "push-pin.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/puzzle.svg.png "puzzle.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/refresh.svg.png "refresh.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/remove.svg.png "remove.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/rewind.svg.png "rewind.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/right-arrow-1.svg.png "right-arrow-1.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/right-arrow.svg.png "right-arrow.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/rocket-launch.svg.png "rocket-launch.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/screen.svg.png "screen.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/search.svg.png "search.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/settings-1.svg.png "settings-1.svg") | 
| 7 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/settings-2.svg.png "settings-2.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/settings.svg.png "settings.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/share.svg.png "share.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/shield.svg.png "shield.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/shopping-cart.svg.png "shopping-cart.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/shutter.svg.png "shutter.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/smartphone.svg.png "smartphone.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/speech-bubble.svg.png "speech-bubble.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/speedometer.svg.png "speedometer.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/stats.svg.png "stats.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/store.svg.png "store.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/sun.svg.png "sun.svg") | 
| 8 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/switch.svg.png "switch.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/tag.svg.png "tag.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/target.svg.png "target.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/timer.svg.png "timer.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/unlock.svg.png "unlock.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/up-arrow.svg.png "up-arrow.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/upload.svg.png "upload.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/video-camera.svg.png "video-camera.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/video.svg.png "video.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/visible.svg.png "visible.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/voice-recorder.svg.png "voice-recorder.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/volume.svg.png "volume.svg") | 
| 9 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/waiting.svg.png "waiting.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/wifi.svg.png "wifi.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/zoom-out.svg.png "zoom-out.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/zoom.svg.png "zoom.svg") | 