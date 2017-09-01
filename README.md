# Game Design Document - UNDER CONSTRUCTION

In this game the player finds himself in a corridor being chased by killer worms. He cuts them with a katana and smacks them with the sword's sheath as he makes his way to the end of the corridor.

Follow this link to test the game in its current state:
https://the-lisbon-vr.github.io/worm-slicer/

## Player:
  - holds katana in right hand and sheath in left hand
  - teleports to move
  - wins the game if he can reach the end of the corridor
  - gets "bloody eyes" if he's being bit
  - loses if he gets attacked by a worm for more than 3 seconds
  - camera fades out if user sticks head inside objects

## Worms:
  - come out of pipes on walls and ceiling(?)
  - chase the player as they come out
  - die with 1 katana slice or 3, 4 sheath hits
  - have 1 animation for moving (wiggling, contracting/extending, other?)
  - have 3 animations for getting cut (separate in 2, wiggle and squirt goo).
  - have 3 animations for getting smacked (wiggle and squirt goo).
  - disappear (fade out) 3 seconds after dying

## Sounds (3 for each):
  - player teleporting
  - player being bit
  - player dying
  - katana slicing air
  - katana slicing worm
  - katana hitting walls
  - sheath hitting walls
  - worm moving
  - worm getting sliced
  - worm getting smacked


**The game must run at 90 FPS** on a web-browser with the HTC Vive so beware of complicated lighting, particle systems, etc.

## Run it locally:

- Clone the repository to your computer.

- Install ` npm ` and ` webpack `.

- Install all the necessary modules:
```
$ npm install
```

- Serve it on localhost:
```
$ serve
```

- Everytime you add a new module add this line to ` index.js `:
```
require('modulename');
```

- And then include it in the dependencies by running:
```
$ webpack
```

## Notes:

**You do NOT need an HTC Vive to edit the scene:** use the mouse to look around and WASD keys to move.

At the moment aframe-physics-system v2.0.0 is not emiting collision events so the app **must use aframe-physics-system _v1.4.3_** until this bug gets fixed.
## Useful Docs:

### Physics engine:
https://github.com/donmccurdy/aframe-physics-system

### How to do pathfinding (for the worms):
https://medium.com/@donmccurdy/creating-a-nav-mesh-for-a-webvr-scene-b3fdb6bed918

### aframe-teleport-controls:
https://github.com/fernandojsg/aframe-teleport-controls

usage example:
```
<a-entity id="right-hand"
  teleport-controls="collisionEntities: #floorRight;
  button: trigger;
  curveHitColor: #9999ff;
  curveMissColor: #ff0000;
  curveNumberPoints: 50;
  curveLineWidth: 0.015;
  curveShootingSpeed: 4"
  vive-controls="hand: right">
</a-entity>
```
