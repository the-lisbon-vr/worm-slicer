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


