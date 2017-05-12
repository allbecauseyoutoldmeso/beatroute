'use strict';

describe('PlaylistMaker', function() {

  var playlist;
  beforeEach(function() {
    playlist = new PlaylistMaker('allbecauseyoutoldmeso', 'spotify%3Atrack%3A72boGlgSwUK01n44O2tOCv,spotify%3Atrack%3A1FvDJ9KGxcqwv1utyPL3JZ');
  })


  it('should execute addTracksToPlaylist upon success', function(options) {
    spyOn($, 'ajax').and.callFake(function(options) {
      options.success();
    });

    var callback = jasmine.createSpy('addTracksToPlaylist');
    playlist.makeEmptyPlaylist(callback);
    expect(callback).toHaveBeenCalled();
  })

});
