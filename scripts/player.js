AFRAME.registerComponent('player', {
  init: function () {
    var cameraEl = document.querySelector('#playerHead');
    var headCollider = document.querySelector('#playerHeadCollider');

    cameraEl.addEventListener('componentchanged', function (evt) {
      if (evt.detail.name !== 'position') { return; }
      // console.log(evt.detail.newData);
    });

    headCollider.addEventListener('collide', function (e) {
  	  console.log('Player reached end of corridor #' + e.detail.body.id);
  	});
    // headCollider.emit('collide', {body: headCollider}, false);
  }
});
