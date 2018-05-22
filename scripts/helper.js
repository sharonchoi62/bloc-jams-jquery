class Helper {

  playPauseAndUpdate (song){
      player.playPause(song);
      const totalTime = player.prettyTime(song.duration);
      $('#time-control .total-time').text(totalTime);
  }
}

const helper = new Helper();
