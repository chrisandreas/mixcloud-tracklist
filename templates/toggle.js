module.exports=function(dust){var tmpl=(function(dust){dust.register("templates\/toggle",body_0);function body_0(chk,ctx){return chk.w("<a class=\"btn btn-small btn-inverse tracklist-toggle-text\" m-tooltip=\"Toggle tracklist\" m-click=\"tracklistShown=!tracklistShown\" ng-class=\"{'btn-toggled': tracklistShown}\"><svg class=\"\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19px\" height=\"14px\" viewBox=\"0 0 19 14\" version=\"1.1\"><path class=\"st0\" d=\"M6,2h12c0.6,0,1-0.4,1-1s-0.4-1-1-1H6C5.4,0,5,0.4,5,1S5.4,2,6,2z M18,12H6c-0.6,0-1,0.4-1,1s0.4,1,1,1h12c0.6,0,1-0.4,1-1S18.6,12,18,12z M1.5,0H1C0.4,0,0,0.4,0,1s0.4,1,1,1h0.5c0.6,0,1-0.4,1-1S2.1,0,1.5,0z M1.5,12H1c-0.6,0-1,0.4-1,1s0.4,1,1,1h0.5c0.6,0,1-0.4,1-1S2.1,12,1.5,12z M18,6H6C5.4,6,5,6.4,5,7l0,0c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1l0,0C19,6.4,18.6,6,18,6z M1.5,6H1C0.4,6,0,6.4,0,7s0.4,1,1,1h0.5c0.6,0,1-0.4,1-1S2.1,6,1.5,6z\"></path></svg><span ng-show=\"tracklistShown\" class=\"ng-hide\">Hide </span><span ng-show=\"!tracklistShown\" class=\"\">Show </span> tracklist</a>");}body_0.__dustBody=!0;return body_0}(dust));var f=function load(ctx, cb) {
      var fn = cb ? 'render' : 'stream';
      return dust[fn](tmpl, ctx, cb);
    };f.template=tmpl;return f}