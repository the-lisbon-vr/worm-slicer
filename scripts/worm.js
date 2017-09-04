AFRAME.registerComponent('worm-spawner', {
  init: function () {
    var scene = document.querySelector('a-scene');
    var secondsBetweenWorms = 5;
    var maxNumberOfWorms = 3;


    function createWorm(){

      var wormEl = document.createElement('a-entity');
      wormEl.setAttribute('class', "worm");
      // wormEl.setAttribute('position', {x: 0, y: 0, z: -2});
      wormEl.setAttribute('rotation', {x: 0, y: 90, z: 0});
      createBody(wormEl);
      animateContractExpand(wormEl);


      return wormEl;

    }

    function animateContractExpand(wormEl){
      var wormContractExpand = document.createElement('a-animation');
      wormContractExpand.setAttribute('attribute', "scale");
      wormContractExpand.setAttribute("from", '1 1 1');
      wormContractExpand.setAttribute("to", '1.2 1 1');
      wormContractExpand.setAttribute("repeat", "indefinite");
      wormContractExpand.setAttribute("direction", "alternate");
      wormContractExpand.setAttribute("easing", "ease-quad");
      wormEl.appendChild(wormContractExpand);
    }

    function createBody(wormEl){
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

    function addWormToScene(wormEl){
      scene.appendChild(wormEl);
    }

    function createNpc(){
      var npcEl = document.createElement('a-entity');
      npcEl.setAttribute('class', 'npc');
      npcEl.setAttribute('nav-controller', 'speed', '1.5');

      var npcBody = createWorm();
      npcEl.appendChild(npcBody);
      addWormToScene(npcEl);

    }

    var i = 0;
    while (i < maxNumberOfWorms) {
      t = i * secondsBetweenWorms * 1000;
      setTimeout(function() { createNpc() }, t);
      i++;
    }

    createWorm();
  }
});

