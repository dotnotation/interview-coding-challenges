// takes in a 2d grid 
// grid of 1's(land) and 0's(water)
// return the number of islands
// an island is 
    // surround by water
    // formed by connecting adjacent lands horizontally and vertically 
        // so if a 1 is diagonal from another 1, that counts as separate islands
    // assume all four edges of the grid are surround by water 

// Input: grid = [
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
//     ]
//     Output: 1

//     Example 2:    
//     Input: grid = [
//     ["1","1","0","0","0"],
//     ["1","1","0","0","0"],
//     ["0","0","1","0","0"],
//     ["0","0","0","1","1"]
//     ]
//     Output: 3

// solution from Andy Gala
const getAdjacent = (i, j, grid, visited) => {
    const adjacentNeighbor = []

    if (i > 0 && !visited[i - 1][j]) adjacentNeighbor.push([i - 1, j])
    if (i < grid.length - 1 && !visited[i + 1][j]) adjacentNeighbor.push([i + 1, j])

    if (j > 0 && !visited[i][j - 1]) adjacentNeighbor.push([i, j - 1])
    if (j < grid[0].length - 1 && !visited[i][j + 1]) adjacentNeighbor.push([i, j + 1])
    
    return adjacentNeighbor
}

const depthFirst = (i, j, grid, visited) => {
    // usually with depthFirst you want to use a stack
    // breadth first you want a queue
    const stack = [[i, j]]
    let islandSize = 0

    while(stack.length){
        let current = stack.pop()
        let [i, j] = current 

        // check if visited
        if (visited[i][j]) continue 
        visited[i][j] = true

        // check if cell is part of an island
        if (grid[i][j] === "0") continue
        islandSize++

        let adjacent = getAdjacent(i, j, grid, visited)

        stack.push(...adjacent)
    }

    return islandSize > 0 ? true : false
}


function numberOfIslands(grid){
    // traverse through either breadth or depth first
    if (grid.length === 0) return null

    let visited = grid.map(row => row.map(cell => false))
    // creating a copy
    let islandCount = 0

    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[i].length; j++){
            if (depthFirst(i, j, grid, visited)) islandCount++
        }
    }

    return islandCount
}

// not very good for time and space