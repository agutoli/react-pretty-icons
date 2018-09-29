# SVG Icons

You don't need to use any ~~webpack loader~~ (I swear) with this package, is a lightweight library which uses just `javascript`. Is just install and import it.

### How it works?

We are using `babel-plugin-inline-react-svg` to convert SVG to javascript, so we don't need SVG loader any more.

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

After your commit it will run each step automatically

    * Convert svg icon to javascript (auto)
    * Update this README with the new icons (auto)
    * Normalize the icons for the same size 32x32 (auto)
    * After commit, the Pipelines will upload theses new icons to amazon `s3`


### CREDITS
#### Free Basic UI Elements

* Site: https://www.flaticon.com/authors/lucy-g
* Author: Lucy G. https://bylucyg.com/
* License: CC 3.0 BY

* Link: https://www.flaticon.com/packs/glypho
* Site: https://www.flaticon.com/authors/bogdan-rosu
* Bogdan Rosu http://www.bogdanrosu.com
* License: CC 3.0 BY 


### Icon Pack
|   -  |   A   |   B   |   C   |   D   |   E   |   F   |   G   |
| :---:| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/add.svg.png "add.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/armchair-silhouette.svg.png "armchair-silhouette.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/bag.svg.png "bag.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/battery.svg.png "battery.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/behance-logo-button.svg.png "behance-logo-button.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/bell-ringing.svg.png "bell-ringing.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/bell.svg.png "bell.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/bluetooth.svg.png "bluetooth.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/bookmark.svg.png "bookmark.svg") | 
| &nbsp; | add | armchair-silhouette | bag | battery | behance-logo-button | bell-ringing | bell | bluetooth | bookmark | 
| 2 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/briefcase.svg.png "briefcase.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/calendar.svg.png "calendar.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/camera-shutter.svg.png "camera-shutter.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/cancel-1.svg.png "cancel-1.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/cancel.svg.png "cancel.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/checkbox-pen-outline.svg.png "checkbox-pen-outline.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/chronometer-outline.svg.png "chronometer-outline.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/clip.svg.png "clip.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/clipboard-icon.svg.png "clipboard-icon.svg") | 
| &nbsp; | briefcase | calendar | camera-shutter | cancel-1 | cancel | checkbox-pen-outline | chronometer-outline | clip | clipboard-icon | 
| 3 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/clipboard-outline.svg.png "clipboard-outline.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/clock-1.svg.png "clock-1.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/clock.svg.png "clock.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/cloud.svg.png "cloud.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/coffe-cup-outline.svg.png "coffe-cup-outline.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/compact-disc-icon.svg.png "compact-disc-icon.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/computer-screens-icons.svg.png "computer-screens-icons.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/correct.svg.png "correct.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/credit-card.svg.png "credit-card.svg") | 
| &nbsp; | clipboard-outline | clock-1 | clock | cloud | coffe-cup-outline | compact-disc-icon | computer-screens-icons | correct | credit-card | 
| 4 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/cursor-1.svg.png "cursor-1.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/cursor.svg.png "cursor.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/cut.svg.png "cut.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/cutlery.svg.png "cutlery.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/directions-signs-outlines.svg.png "directions-signs-outlines.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/down-arrow.svg.png "down-arrow.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/download.svg.png "download.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/downloading-action.svg.png "downloading-action.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/dribble-logo-button.svg.png "dribble-logo-button.svg") | 
| &nbsp; | cursor-1 | cursor | cut | cutlery | directions-signs-outlines | down-arrow | download | downloading-action | dribble-logo-button | 
| 5 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/edit.svg.png "edit.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/empty-shopping-cart.svg.png "empty-shopping-cart.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/envelope.svg.png "envelope.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/export.svg.png "export.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/eye-button.svg.png "eye-button.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/facebook-logo-button.svg.png "facebook-logo-button.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/favorite.svg.png "favorite.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/file.svg.png "file.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/flask-outline.svg.png "flask-outline.svg") | 
| &nbsp; | edit | empty-shopping-cart | envelope | export | eye-button | facebook-logo-button | favorite | file | flask-outline | 
| 6 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/folded-document-icon.svg.png "folded-document-icon.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/folded-map.svg.png "folded-map.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/folder.svg.png "folder.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/forward.svg.png "forward.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/gallery.svg.png "gallery.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/gamepad.svg.png "gamepad.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/garbage.svg.png "garbage.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/globe-outline.svg.png "globe-outline.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/google-plus-logo-button.svg.png "google-plus-logo-button.svg") | 
| &nbsp; | folded-document-icon | folded-map | folder | forward | gallery | gamepad | garbage | globe-outline | google-plus-logo-button | 
| 7 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/happy-mac-logo.svg.png "happy-mac-logo.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/headphones.svg.png "headphones.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/heart-rate-monitor.svg.png "heart-rate-monitor.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/heart.svg.png "heart.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/hearts-outline-icon.svg.png "hearts-outline-icon.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/help.svg.png "help.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/home.svg.png "home.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/hourglass.svg.png "hourglass.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/house-outline.svg.png "house-outline.svg") | 
| &nbsp; | happy-mac-logo | headphones | heart-rate-monitor | heart | hearts-outline-icon | help | home | hourglass | house-outline | 
| 8 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/inbox-icon.svg.png "inbox-icon.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/info.svg.png "info.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/instagram-logo.svg.png "instagram-logo.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/jar-almost-full-outline.svg.png "jar-almost-full-outline.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/karaoke-microphone-icon.svg.png "karaoke-microphone-icon.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/laptop-icon.svg.png "laptop-icon.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/layer.svg.png "layer.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/layers-icon.svg.png "layers-icon.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/layout.svg.png "layout.svg") | 
| &nbsp; | inbox-icon | info | instagram-logo | jar-almost-full-outline | karaoke-microphone-icon | laptop-icon | layer | layers-icon | layout | 
| 9 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/left-arrow-1.svg.png "left-arrow-1.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/left-arrow.svg.png "left-arrow.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/light-bulb-icon.svg.png "light-bulb-icon.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/lighting-button.svg.png "lighting-button.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/lightning.svg.png "lightning.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/link.svg.png "link.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/linkedin-logo-button.svg.png "linkedin-logo-button.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/logout.svg.png "logout.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/magnet.svg.png "magnet.svg") | 
| &nbsp; | left-arrow-1 | left-arrow | light-bulb-icon | lighting-button | lightning | link | linkedin-logo-button | logout | magnet | 
| 10 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/map-pin-marked.svg.png "map-pin-marked.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/map.svg.png "map.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/menu.svg.png "menu.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/monitor.svg.png "monitor.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/moon.svg.png "moon.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/nut-icon.svg.png "nut-icon.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/old-fashion-briefcase.svg.png "old-fashion-briefcase.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/padnote.svg.png "padnote.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/paint.svg.png "paint.svg") | 
| &nbsp; | map-pin-marked | map | menu | monitor | moon | nut-icon | old-fashion-briefcase | padnote | paint | 
| 11 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/pause.svg.png "pause.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/photo-camera-outline.svg.png "photo-camera-outline.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/photo-camera.svg.png "photo-camera.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/pie-chart-outline.svg.png "pie-chart-outline.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/placeholder.svg.png "placeholder.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/play-button.svg.png "play-button.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/power-button-outline.svg.png "power-button-outline.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/power-cord.svg.png "power-cord.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/power.svg.png "power.svg") | 
| &nbsp; | pause | photo-camera-outline | photo-camera | pie-chart-outline | placeholder | play-button | power-button-outline | power-cord | power | 
| 12 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/present-outline.svg.png "present-outline.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/presentation-outline.svg.png "presentation-outline.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/presentation.svg.png "presentation.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/printer.svg.png "printer.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/profile.svg.png "profile.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/prohibition.svg.png "prohibition.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/push-pin.svg.png "push-pin.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/puzzle.svg.png "puzzle.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/pyre-silhouette.svg.png "pyre-silhouette.svg") | 
| &nbsp; | present-outline | presentation-outline | presentation | printer | profile | prohibition | push-pin | puzzle | pyre-silhouette | 
| 13 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/quaver-outline.svg.png "quaver-outline.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/refresh.svg.png "refresh.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/remove.svg.png "remove.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/rewind.svg.png "rewind.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/right-arrow-1.svg.png "right-arrow-1.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/right-arrow.svg.png "right-arrow.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/rocket-icon.svg.png "rocket-icon.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/rocket-launch.svg.png "rocket-launch.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/screen.svg.png "screen.svg") | 
| &nbsp; | quaver-outline | refresh | remove | rewind | right-arrow-1 | right-arrow | rocket-icon | rocket-launch | screen | 
| 14 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/search.svg.png "search.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/sending-from-the-inbox.svg.png "sending-from-the-inbox.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/settings-1.svg.png "settings-1.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/settings-2.svg.png "settings-2.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/settings.svg.png "settings.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/share.svg.png "share.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/sharing-interface.svg.png "sharing-interface.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/shield.svg.png "shield.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/shopping-cart.svg.png "shopping-cart.svg") | 
| &nbsp; | search | sending-from-the-inbox | settings-1 | settings-2 | settings | share | sharing-interface | shield | shopping-cart | 
| 15 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/shopping-purse-icon.svg.png "shopping-purse-icon.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/shutter.svg.png "shutter.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/slating-flag.svg.png "slating-flag.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/smartphone.svg.png "smartphone.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/speech-bubble-outline.svg.png "speech-bubble-outline.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/speech-bubble.svg.png "speech-bubble.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/speech-bubbles-outline.svg.png "speech-bubbles-outline.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/speedometer.svg.png "speedometer.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/star-button.svg.png "star-button.svg") | 
| &nbsp; | shopping-purse-icon | shutter | slating-flag | smartphone | speech-bubble-outline | speech-bubble | speech-bubbles-outline | speedometer | star-button | 
| 16 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/stats.svg.png "stats.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/store.svg.png "store.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/sun.svg.png "sun.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/switch.svg.png "switch.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/switches-on-and-off.svg.png "switches-on-and-off.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/tag.svg.png "tag.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/target.svg.png "target.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/telephone-outline.svg.png "telephone-outline.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/timer-silhouette.svg.png "timer-silhouette.svg") | 
| &nbsp; | stats | store | sun | switch | switches-on-and-off | tag | target | telephone-outline | timer-silhouette | 
| 17 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/timer.svg.png "timer.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/truck-icon.svg.png "truck-icon.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/tumblr-logo-button.svg.png "tumblr-logo-button.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/twitter-logo-button.svg.png "twitter-logo-button.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/umbrella-and-raindrops.svg.png "umbrella-and-raindrops.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/unlock.svg.png "unlock.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/up-arrow.svg.png "up-arrow.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/upload.svg.png "upload.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/uploading-archive.svg.png "uploading-archive.svg") | 
| &nbsp; | timer | truck-icon | tumblr-logo-button | twitter-logo-button | umbrella-and-raindrops | unlock | up-arrow | upload | uploading-archive | 
| 18 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/user-avatar-main-picture.svg.png "user-avatar-main-picture.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/video-camera.svg.png "video-camera.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/video-player-outline.svg.png "video-player-outline.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/video.svg.png "video.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/visible.svg.png "visible.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/voice-recorder.svg.png "voice-recorder.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/volume.svg.png "volume.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/waiting.svg.png "waiting.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/wifi.svg.png "wifi.svg") | 
| &nbsp; | user-avatar-main-picture | video-camera | video-player-outline | video | visible | voice-recorder | volume | waiting | wifi | 
| 19 | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/zoom-out.svg.png "zoom-out.svg") | ![Alt text](http://s3.amazonaws.com/react-pretty-icons/__react-pretty-icons__/zoom.svg.png "zoom.svg") |  - | - | - | - | - | - | - |
 | &nbsp; | zoom-out | zoom |  - | - | - | - | - | - | - |