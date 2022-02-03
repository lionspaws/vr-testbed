var state = 0;

AFRAME.registerComponent('state-a-click', {
  init: function () {
    var el = this.el;
    this.el.addEventListener('click', function () {
      state++;
      console.log(state);
    });
  }
});

AFRAME.registerComponent('state-b-click', {
  init: function () {
    var el = this.el;
    this.el.addEventListener('click', function () {
      state--;
      console.log(state);
    });
  }
});