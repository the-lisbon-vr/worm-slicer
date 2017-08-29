AFRAME.registerComponent('player', {
  init: function () {
  	// require('aframe-teleport-controls');
    var cameraEl = document.querySelector('#playerHead')
    var headCollider = document.querySelector('#playerHeadCollider');

    cameraEl.addEventListener('componentchanged', function (evt) {
      if (evt.detail.name !== 'position') { return; }
      // console.log(evt.detail.newData);
    });

    headCollider.addEventListener('collide', function (e) {
	  console.log('Player has collided with body #' + e.detail.body);
	});
  }
});
