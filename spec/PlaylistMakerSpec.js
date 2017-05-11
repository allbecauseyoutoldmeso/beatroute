'use strict';

describe('PlaylistMaker', function() {

  var playlist;
  beforeEach(function() {
    playlist = new PlaylistMaker('allbecauseyoutoldmeso', 'spotify%3Atrack%3A72boGlgSwUK01n44O2tOCv,spotify%3Atrack%3A1FvDJ9KGxcqwv1utyPL3JZ');
  })


  // it('should execute addTracksToPlaylist upon success', function(options) {
  //   spyOn($, 'ajax').and.callFake(function() {
  //     options.success();
  //   });
  //
  //     var callback = jasmine.createSpy('addtracks');
  //     playlist.makeEmptyPlaylist(callback);
  //     expect(callback).toHaveBeenCalled();
  //
  // })



  //------------------------------------------------------------------------

  // it('should fetch from a server', function() {
  //   var callback = jasmine.createSpy('callback');
  //   var data = [{x: 0, y: 0},];
  //
  //   spyOn($, 'ajax').and.callFake(function (request) {
  //     var d = $.Deferred();
  //     d.resolve(data);
  //     return d.promise();
  //   });
  //
  //   playlist.makeEmptyPlaylist(callback);
  //
  //   var fakeData = callback.calls.mostRecent().args[0];
  //   expect(fakeData[0].x).toEqual(data[0].x);
  //   expect(callback).toHaveBeenCalled();
  // });

});
