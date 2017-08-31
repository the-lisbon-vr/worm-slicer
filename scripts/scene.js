AFRAME.registerComponent('end-of-corridor-collider', {
  init: function () {

    var cameraEl = document.querySelector('#playerHead');
    var headCollider = document.querySelector('#playerHeadCollider');
    var endOfCorridor =  this.el;
    var allLights = document.querySelectorAll('[light]');
    var spotlight = document.querySelector('#end-scene-spotlight');

    endOfCorridor.addEventListener('playerreachedend', function (evt) {
      console.log('You\'ve reached the end of the level');
      turnOffAllLights();
      turnOnSpotlight();
    });

    function turnOffAllLights(){
      for (var i = 0; i < allLights.length; i++) {
        allLights[i].setAttribute('light', 'intensity', '0');

      }
    }

    function turnOnSpotlight(){
      spotlight.setAttribute('light', 'intensity', '1.6');
    }

  }
});

AFRAME.registerComponent('nav-pointer', {
  init: function () {
    const el = this.el;

    // On click, send the NPC to the target location.
    el.addEventListener('click', (e) => {
      const ctrlEl = el.sceneEl.querySelector('[nav-controller]');
      console.log('destination x: ' + e.detail.intersection.point.x);
      console.log('destination y: ' + e.detail.intersection.point.y);
      console.log('destination z: ' + e.detail.intersection.point.z);
      ctrlEl.setAttribute('nav-controller', {
        active: true,
        destination: e.detail.intersection.point
      });
    });

    // When hovering on the nav mesh, show a green cursor.
    el.addEventListener('mouseenter', () => {
      el.setAttribute('material', {color: 'green'});
    });
    el.addEventListener('mouseleave', () => {
      el.setAttribute('material', {color: 'crimson'})
    });

    // Refresh the raycaster after models load.
    el.sceneEl.addEventListener('object3dset', () => {
      this.el.components.raycaster.refreshObjects();
    });
  }
});
