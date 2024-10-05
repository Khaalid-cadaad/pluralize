// Good Luck 💪🏾
function pluralize(words) {
   
    const wordCount = {};

    
    for (const word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

   
    return words.map(word => {
       
        if (wordCount[word] > 1) {
            return word + 's';
        }
        
        return word;
    }).filter((value, index, self) => self.indexOf(value) === index); 
}


console.log(pluralize(["cat", "dog", "cat", "mouse"])); 
console.log(pluralize(["car", "car", "car"])); 