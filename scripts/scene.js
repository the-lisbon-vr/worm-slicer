AFRAME.registerComponent('end-of-corridor-collider', {
  init: function () {
    var headCollider = document.querySelector('#playerHeadCollider');
    var endOfCorridor =  this.el;
    console.log("End of Corridor: " + endOfCorridor);

    headCollider.addEventListener('componentchanged', function (evt) {
      if (evt.detail.name !== 'position') { return; }
      // console.log(evt.detail.newData);
    });

  }
});
