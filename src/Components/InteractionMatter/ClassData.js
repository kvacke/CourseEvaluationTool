export const generateClassData = (noOf5s, noOf8s, noOf15s, noOf30s) => {

    var classes = []

    for(let i = 0; i < noOf5s; i++)
    {
        classes.push(
            {
                name : 'some five-point course',
                credits : 5
            }
        )
    }
    for(let i = 0; i < noOf8s; i++)
    {
        classes.push(
            {
                name : 'some eight-point course',
                credits : 8
            }
        )
    }
    for(let i = 0; i < noOf15s; i++)
    {
        classes.push(
            {
                name : 'some fifteen-point course',
                credits : 15
            }
        )
    }
    for(let i = 0; i < noOf30s; i++)
    {
        classes.push(
            {
                name : 'some thirty-point course',
                credits : 30
            }
        )
    }
    return classes
}
