
let sentence = prompt("cümle giriniz");
const wordCount={};

const words = sentence.toLocaleLowerCase().replace(/[^a-z\s]/g, '').split(" ");
for (const word of words) {
    if(word){
        if(wordCount[word]){
            wordCount[word]++;
        }else {
            wordCount[word]=1;
        }
    }
    
}
console.log(wordCount);



