function main(words){
    // 2D array, to save the anagram group
    // first group containing the first item from array `words`
    let anagram = [[words[0]]]

    // loop through each item in array `words` except the first one
    for(let i=1; i<words.length; i++){
        // this function will distribute each item from array `words` to their respective anagram group
        // and update array `anagram` with the newest data
        anagram = checkAnagram(anagram, words[i])
    }
    return anagram
}

function checkAnagram(group, word) {
    let isNewGroup = true

    // loop through each anagram group
    for(let i=0; i<group.length; i++){
        // check if current word has the same length as the first item from each anagram group
        if(word.length == group[i][0].length){
            let hasSameChars = true

            // loop through each characters of the current word
            for(let j=0; j<word.length; j++){
                // if there is a different character between the current word and the first item from each anagram group
                // update `hasSameChars` value as false
                if(group[i][0].toLowerCase().indexOf(word[j].toLowerCase()) < 0) {
                    hasSameChars = false
                }
            }
        
            if(hasSameChars == true){
                // if `hasSameChars` value is true, add current word to the current anagram group
                group[i].push(word)

                // because we already found the group, set 'isNewGroup' value as false
                isNewGroup = false

                // no need to check the next group, so we stop the looping
                break
            }
        }
    }

    // if `isNewGroup` is true, add current word to a new group
    if(isNewGroup == true){
        group.push([word])
    }

    return group
}

const arr = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map']
console.log(main(arr))