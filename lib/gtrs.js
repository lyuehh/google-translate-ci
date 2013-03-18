var request = require('request');

function trs(word) {
  "use strict";

  if(!word) {
    console.log("Usage: gtrs word");
    return;
  }

  var firstChar = word[0].charCodeAt(0);
  var sl, tl;

  if(firstChar >= 65 && firstChar <= 122) {
    sl = 'en';
    tl = 'zh-CN';
  } else {
    sl = 'zh-CN';
    tl = 'en';
  }

  var url='http://translate.google.cn/translate_a/t?client=t&hl=zh-CN&sl=' +
  sl + '&tl=' + tl + '&ie=UTF-8&oe=UTF-8&text=' +
    encodeURIComponent(word) + '&multires=1&oc=4&prev=btn&ssel=3&tsel=3&sc=1';

  request(url, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var obj = eval(body);
      var i,j;
      console.log(obj[0][0][1] + ": " + obj[0][0][0] + " " + obj[0][0][2]);
      console.log('');

      if(!obj[1]){
        return;
      }
      for(i=0;obj[1] && i<obj[1].length;i++) {
        console.log(obj[1][i][0] + ': ' + obj[1][i][1]);
        for(j=0;j<obj[1][i][1].length;j++) {
          console.log(obj[1][i][1][j] + ": " + obj[1][i][2][j][1]);
        }
        console.log('');
      }
    }
  });
}
exports.trs = trs;
