var kuromoji = require("kuromoji");
kuromoji.builder({ dicPath: "./dict/" }).build(function (err, tokenizer) {
    var path = tokenizer.tokenize("すもももももももものうち");
    console.log(path);
});