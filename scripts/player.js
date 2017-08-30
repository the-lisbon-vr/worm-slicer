AFRAME.registerComponent('player', {
  init: function () {
    var cameraEl = document.querySelector('#playerHead');
    var headCollider = document.querySelector('#playerHeadCollider');
    var corridor = document.querySelector('#corridor');
    var corridorWidth = corridor.getAttribute('width');
    var corridorLength = corridor.getAttribute('depth');

    var endOfCorridor =  document.querySelector('#endOfCorridorCollider');

    cameraEl.addEventListener('componentchanged', function (evt) {
      if (evt.detail.name !== 'position') { return; }

      boundaryX = Math.abs(evt.detail.newData.x);
      boundaryZ = Math.abs(evt.detail.newData.z);

      // turn Off camera if player goes outside the corridor:
      if (boundaryX >= corridorWidth/2 || boundaryZ >= corridorLength/2){
        // console.log("outside x: " + evt.detail.newData.x);
        turnOffCamera();
      }
      else {
        turnOnCamera();
      }
    });

    headCollider.addEventListener('collide', function (e) {
  	  console.log('Player collided with #' + e.detail.body.el.id);

      if (e.detail.body.el.id == 'endOfCorridorCollider'){
        endOfCorridor.emit('playerreachedend', {}, false);
      }
  	});

    function turnOffCamera(){
      headCollider.setAttribute('scale', '1 1 -1');
    }

    function turnOnCamera(){
      headCollider.setAttribute('scale', '1 1 1');
    }
  }

});
