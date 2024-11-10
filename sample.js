import kuromoji from "kuromoji";
import { neologdDict } from "kuromoji-ipadic-neologd";

console.log(neologdDict);

(async ()=>{
    kuromoji.builder({ dicPath: neologdDict }).build(function (err, tokenizer) {
        var path = tokenizer.tokenize("すもももももももものうち");
        console.log(path);
    });
})();

