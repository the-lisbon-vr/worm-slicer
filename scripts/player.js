console.log("JEsus ---------------------");
AFRAME.registerComponent('player', {
  init: function () {
    var cameraEl = document.querySelector('#playerHead')

    cameraEl.addEventListener('componentchanged', function (evt) {
      if (evt.detail.name !== 'position') { return; }
      // console.log(evt.detail.newData);
    });
  }
});
