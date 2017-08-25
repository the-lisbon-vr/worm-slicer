
AFRAME.registerComponent('chase-player', {
  init: function () {
    var cameraEl = document.querySelector('#playerHead')

    cameraEl.addEventListener('componentchanged', function (evt) {
      if (evt.detail.name !== 'position') { return; }
      console.log(evt.detail.newData);
    });
  }
});

AFRAME.registerComponent('worm-spawner', {
  init: function () {
    // Solution for Modifying Entities.
    var scene = document.querySelector('a-scene');

    var wormEl = document.createElement('a-entity');
    wormEl.setAttribute('class', "worm");
    wormEl.setAttribute('position', {x: 0, y: 0, z: -2});
    wormEl.setAttribute('rotation', {x: 0, y: 90, z: 0});
    wormEl.setAttribute('chase-player', '');

    var wormMove = document.createElement('a-animation');
    wormMove.setAttribute('attribute', "position");
    wormMove.setAttribute("from", "0 0.2 -5");
    wormMove.setAttribute("to", "0 0.2 -2");
    // wormMove.setAttribute("repeat", "indefinite");
    // wormMove.setAttribute("direction", "alternate");
    wormMove.setAttribute("dur", "10000");

    var wormContractExpand = document.createElement('a-animation');
    wormContractExpand.setAttribute('attribute', "scale");
    wormContractExpand.setAttribute("from", '1 1 1');
    wormContractExpand.setAttribute("to", '1.2 1 1');
    wormContractExpand.setAttribute("repeat", "indefinite");
    wormContractExpand.setAttribute("direction", "alternate");
    wormContractExpand.setAttribute("easing", "ease-quad");

    // TODO: create 3 spheres with loop. Only change is value of x in position
    var wormSphere01 = document.createElement('a-sphere');
    wormSphere01.setAttribute('color', '#333');
    wormSphere01.setAttribute('radius', 0.2);
    wormSphere01.setAttribute('position', {x: 0, y: 0, z: 0});

    var wormSphere02 = document.createElement('a-sphere');
    wormSphere02.setAttribute('color', '#333');
    wormSphere02.setAttribute('radius', 0.2);
    wormSphere02.setAttribute('position', {x: -0.18, y: 0, z: 0});

    var wormSphere03 = document.createElement('a-sphere');
    wormSphere03.setAttribute('color', '#333');
    wormSphere03.setAttribute('radius', 0.2);
    wormSphere03.setAttribute('position', {x: 0.18, y: 0, z: 0});

    wormEl.appendChild(wormMove);
    wormEl.appendChild(wormContractExpand);
    wormEl.appendChild(wormSphere01);
    wormEl.appendChild(wormSphere02);
    wormEl.appendChild(wormSphere03);
    console.log(wormEl);
    scene.appendChild(wormEl);
  }
});
