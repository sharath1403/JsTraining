var competations = [
    ["C#", "HTML"],
    ["HTML", "Python"],
    ["Python", "C#"]
];

var result = [0, 0, 1];
getWinner(competations, result);

function getWinner(competations, result) {
    //console.log(competations);
    //console.log(result);
    var winnerArr = [];
    for (var i = 0; i < competations.length; i++) {
        if (result[i] == 0) {
            winnerArr.push(competations[i][1])
        }

        if (result[i] == 1) {
            winnerArr.push(competations[i][0])
        }
    }
    const counts = {};
    for (const topic of winnerArr) {
        counts[topic] = counts[topic] ? counts[topic] + 1 : 1;
    }
    for (const key of Object.keys(counts)) {
        counts[key] = counts[key] * 3;
    }
    console.log(counts);
    document.getElementById("sln").innerHTML = JSON.stringify(counts);
}