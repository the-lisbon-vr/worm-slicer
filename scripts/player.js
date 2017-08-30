AFRAME.registerComponent('player', {
  init: function () {
    var cameraEl = document.querySelector('#playerHead');
    var headCollider = document.querySelector('#playerHeadCollider');

    cameraEl.addEventListener('componentchanged', function (evt) {
      if (evt.detail.name !== 'position') { return; }

      boundaryX = Math.abs(evt.detail.newData.x);
      boundaryZ = Math.abs(evt.detail.newData.z);

      // show all black if player goes outside the corridor:
      if (boundaryX >= 5 || boundaryZ >= 5){
        console.log("outside x: " + evt.detail.newData.x);
        console.log("outside z: " + evt.detail.newData.z);
        headCollider.setAttribute('scale', '1 1 -1');
      }
      else {
        headCollider.setAttribute('scale', '1 1 1');
      }
    });

    headCollider.addEventListener('collide', function (e) {
  	  console.log('Player reached end of corridor #' + e.detail.body.id);
  	});
    // headCollider.emit('collide', {body: headCollider}, false);
  }
});
