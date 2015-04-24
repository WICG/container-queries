/*global module:true*/
(function() {
  "use strict";

  module.exports = function(grunt) {
    "gh-pages": {
      options: {
        base: '.'
      },
      src: ["**/*", "!node_modules/**/*"]
    }
  };
})();