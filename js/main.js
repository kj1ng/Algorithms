

//Program to check word length and count

    let wordStore = prompt("Enter a sentence ending with a dot", "space your words")
    let charLength = 0;
    let wordCount  = 0;
    let vowelCount = 0;
    
    //Solution 1 - Check total Chatacter Length
    for (let i = 0; i < wordStore.length; i++){
        if (wordStore){
            charLength++
        } 
    }

    console.log(`The length of sentence is ${charLength}`);
    

    //Solution 2 - //Solution 2 - Check Number of Words in Sentence
    let newStringArray = wordStore.split(' ')  
    wordCount = newStringArray.length;
    
    console.log(`The number of words in the sentence is ${wordCount}`);
    

    // soluton 3 - Check Vowel Characters in Sentence 
for (let i = 0; i < wordStore.length; i++){
        if (wordStore.charAt(i) == 'a'){
            vowelCount++
        }
        else if (wordStore.charAt(i) == 'e'){
            vowelCount++
        }
        else if (wordStore.charAt(i) == 'i'){
            vowelCount++
        }

        else if (wordStore.charAt(i) == 'o'){
            vowelCount++
        }
        else if(wordStore.charAt(i) == 'u'){
            vowelCount++
        }
    }
        console.log(`The number of vowels in the sentence is ${vowelCount}`);