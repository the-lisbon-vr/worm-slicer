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

    wormEl.appendChild(wormMove);
    wormEl.appendChild(wormContractExpand);

    createWorm();

    function createWorm(){
      // Worms are made up of spherical sections
      var wormNumberOfSections = 3;
      var wormColor = '#333';
      var wormSectionRadius = 0.2;
      var wormSectionPosition = {x: 0, y: 0, z: 0};
      var sectionOffset = 0.18; // offset beteen sections of the worm

      for (var i = 1; i <= wormNumberOfSections; i++) {
        var section = document.createElement('a-sphere');
        section.setAttribute('color', wormColor);
        section.setAttribute('radius', wormSectionRadius);
        section.setAttribute('position', wormSectionPosition);
        wormEl.appendChild(section);
        wormSectionPosition.x += sectionOffset;
      }
    }

    console.log(wormEl);
    scene.appendChild(wormEl);
  }
});

AFRAME.registerComponent('chase-player', {
  init: function () {
    var cameraEl = document.querySelector('#playerHead')

    cameraEl.addEventListener('componentchanged', function (evt) {
      if (evt.detail.name !== 'position') { return; }
      // Show player head position:
      console.log(evt.detail.newData);
    });
  }
});
