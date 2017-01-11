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

   var url = 'https://translate.google.cn/translate_a/single?client=t&sl='+sl+'&tl='+tl+'&hl=zh-CN&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&ssel=3&tsel=6&kc=0&tk=173466.323578&q=' + encodeURIComponent(word)

  var options = {
    url: url,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36',
      'Referer': 'https://translate.google.cn/'
    }
  };

  request(options, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var obj = eval(body);
      var i,j;
      console.log(obj[0][0][1] + ": " + obj[0][0][0] + " " + (obj[0][1][2] || obj[0][1][3]));
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
    } else if (response.statusCode == '403'){
      console.log('Forbidden by Google')
    }
  });
}
exports.trs = trs;
