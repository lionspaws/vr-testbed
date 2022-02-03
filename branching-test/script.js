var state = 0;

AFRAME.registerComponent('a', {
  init: function () {
    state++;
    console.log(state);
  }
});

AFRAME.registerComponent('b', {
  init: function () {
    state--;
    console.log(state);
  }
});