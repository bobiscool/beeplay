function beeplay (option) {
  this.stack = [];
  this.currentTime = 0;
  this.volume = option.volume || 1;
  this.sampleRate = option.sampleRate || 44100;
}

beeplay.prototype.play = function (data) {
  this.tempo = data.tempo || 120
  this.song = data.song || null
  this.beats = data.beats || 1 / 4
}

module.exports = beeplay
global.beeplay = beeplay
