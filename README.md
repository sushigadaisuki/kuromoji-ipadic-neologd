## [kuromoji-ipadic-neologd](https://www.npmjs.com/package/kuromoji-neologd)


[mecab-ipadic-neologd](https://github.com/neologd/mecab-ipadic-neologd) の辞書を [kuromoji](https://github.com/atilika/kuromoji) で使えるようにしたものです。  
[kuromoji-js-dictionary](https://github.com/sable-virt/kuromoji-js-dictionary) を使ってビルドしています。  
Nodejsで精度の良い形態素解析がしたいときにどうぞ。  
ファイルが大きいのでGit LFSを使っています。  
npm i すると postinstall script で Git Releasesからzipファイルをダウンロードしてくるので数秒かかります。  

## Install
```sh
npm i kuromoji-neologd
```

## example
```javascript
import kuromoji from "kuromoji";
import { neologdDict } from "kuromoji-neologd";

(async ()=>{
    kuromoji.builder({ dicPath: neologdDict }).build(function (err, tokenizer) {
        var path = tokenizer.tokenize("すもももももももものうち");
        console.log(path);
    });
})();
```

## Thanks
[neologd](https://github.com/neologd/mecab-ipadic-neologd)
[mecab-ipadic-neologd](https://github.com/atilika/kuromoji)
[kuromoji](https://github.com/atilika/kuromoji)
[kuromoji-js-dictionary](https://github.com/sable-virt/kuromoji-js-dictionary)