var num = [1, 2, 3]

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

function total(num) {
    var result = num.reduce(function(final, num){
        final += num
        return final
    })
    console.log(result)
}

total(num)

function numString(num) {
    var result = num.reduce(function(final, num) {
        final += num
        return final
    }, "")
    console.log(result)
}
numString(num)


function totalVoters() {
    var result = voters.reduce(function(final, voters) {
        if (voters.voted) {
            final++
        }
        return final
    }, 0)
    console.log(result)
}
totalVoters(voters)

function shoppingSpree(wishlist) {
    var result = wishlist.reduce(function (final, wishlist){
        final += wishlist.price
        return  final
    },0)
    console.log(result)
}
shoppingSpree(wishlist)


function flatten(arrays) {
    var result = arrays.reduce(function(final, array) {
        // final.concat(array)
        // console.log(final.concat(array))
        return final.concat(array)
    }, [])
    return result
}
console.log(flatten(arrays))

function voterResults(voters) {
    var result = voters.reduce(function(final,voter){
       
        if (voter.age <= 25){
            final.numOfYoungPeople++
        } else if(voter.age <= 35) {
            final.numMidsPeople++
        } else if(voter.age <= 55) {
            final.numOldPeople++
        }

        if (voter.voted === true && voter.age <= 25) {
            final.numOfYoungVotes++
        } else if (voter.voted === true && voter.age <= 35) {
            final.numMidVotesPeople ++
        } else if (voter.voted && voter.age <= 55) {
            final.numOldVotesPeople ++
        }

        return final
    }, {numOfYoungPeople: 0, numOfYoungVotes: 0, numMidsPeople: 0,numMidVotesPeople: 0, numOldPeople: 0, numOldVotesPeople:0})
    return result
}

console.log(voterResults(voters))
