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

  var url = 'http://translate.google.cn/translate_a/single?client=t&sl='+sl+
      '&tl='+tl+'&hl=zh-CN&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&dt=at&ie=UTF-8&oe=UTF-8&source=bh&ssel=0&tsel=0&tk=519275|857917&q='+
      encodeURIComponent(word);

  var options = {
    url: url,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36',
        'Referer': 'http://translate.google.cn/'
    }
  };

  request(url, function (error, response, body) {
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
    }
  });
}
exports.trs = trs;
