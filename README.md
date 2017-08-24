# Game Design Document - UNDER CONSTRUCTION

Follow this link to test the game in its current state:
https://the-lisbon-vr.github.io/worm-slicer/

Player is in a corridor and teleports to move. Objective is to reach the end of the corridor.

Worms come out of pipes on walls and ceiling(?) and go towards the player, chasing him and blocking his passage.

Player slices them with a katana (possible to use sheath for smacking worms)

Worms must have an animation for locomotion (wiggling, contracting/extending, other?).

Worms get cut and stop moving when the katana goes through them. Animation for this as well (with blood or goo).

Camera tinted red if worms are touching the player. If a worm is touching for more than 3 seconds player dies.

The game must run at 90 FPS on a web-browser with the HTC Vive so beware of complicated lighting, particle systems, etc.

## Notes:

Clone the repository to your computer and do `$ serve` to deploy it localy on localhost.

**You do NOT need an HTC Vive to edit the scene:** use the mouse to look around and WASD keys to move.

Remember to include every component in the head of the index.html file, inside a script tag and after the meta tags.

Example:
```
<head>
  <script src="https://unpkg.com/aframe-flying-pandas@1.0.x/dist/aframe-flying-pandas-component.min.js"></script>
</head>
```
