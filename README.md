Infinite images app build with React, TS and MobX.

App consists of 3 tabs, Home, Images and Albums. Home is just a homepage view, 
images is a list of images fetched from a https://jsonplaceholder.typicode.com/ REST API 
and albums is a list of albums fetched from the same API. 

Images view has lazy loading done with infinite scroll (React Waypoint). Clicking a image
will show you more detailed view of the image with image title and album title. In this 
view you can also navigate pictures with Next and Prev buttons.

Albums view currently has a plain table with albums listed in it. By clicking an album
you can show all the pictures inside that album.

App is currently running at https://yberimages.herokuapp.com. You can also share direct
links to images and albums ie. https://yberimages.herokuapp.com/images/4.

To test app: git clone -> yarn install -> yarn run 