AFRAME.registerComponent('log', {
  schema: {type: 'string'},

  init: function () {
    var stringToLog = this.data;
    console.log(stringToLog);
  }
});

AFRAME.registerState({
  initialState: {
    choiceState: 0
  },

  handlers: {
    addChoice: function (state) {
      state.choiceState += 1;
    }
  },
});