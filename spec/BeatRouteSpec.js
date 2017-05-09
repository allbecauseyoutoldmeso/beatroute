describe ('Beatroute', function() {
  var beatroute;

  beforeEach(function () {
      beatroute = new Beatroute();
});

  var testDouble = {
    id: '6rqhFgbbKwnb9MLmUQDhG6',
    name: 'Speak To Me - 2011 Remastered Version'
  };

  it('prints out song title from ID', function() {
    expect(beatroute.displayTitle(testDouble)).toEqual('Speak To Me - 2011 Remastered Version')
  });
});
