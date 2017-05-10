describe ('Beatroute', function() {
  var beatroute;

  beforeEach(function () {
      beatroute = new Beatroute();
});

  var testDouble = ['Pink+Floyd+Speak+To+Me']


  it('prints out song title from ID', function() {
    expect(track(testDouble)).toEqual('574y1r7o2tRA009FW0LE7v')
  });
});
