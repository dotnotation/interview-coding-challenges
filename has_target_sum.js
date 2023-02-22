// linear time
function hasTargetSum(arr, target){
    let results = []
    let history = {}

    arr.forEach((current) => {
        const remainder = target - current
        if (remainder in history){
            results.push([current, remainder])
        }
        history[remainder] = true
    })

    return results
}