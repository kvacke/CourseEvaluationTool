export const generateClassData = (noOf5s, noOf8s, noOf15s, noOf30s) => {

    var classes = []

    for(let i = 0; i < noOf5s; i++)
    {
        classes.push(
            {
                name : 'some five-point course',
                credits : 5,
                evaluated : Math.random() < 0.5
            }
        )
    }
    for(let i = 0; i < noOf8s; i++)
    {
        classes.push(
            {
                name : 'some eight-point course',
                credits : 8,
                evaluated : Math.random() < 0.5

            }
        )
    }
    for(let i = 0; i < noOf15s; i++)
    {
        classes.push(
            {
                name : 'some fifteen-point course',
                credits : 15,
                evaluated : Math.random() < 0.5

            }
        )
    }
    for(let i = 0; i < noOf30s; i++)
    {
        classes.push(
            {
                name : 'some thirty-point course',
                credits : 30,
                evaluated : Math.random() < 0.5

            }
        )
    }
    return shuffle(classes)
}


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }