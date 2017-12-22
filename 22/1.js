const input = `.#.##..##...#...#.....##.
#.......###..#...#.#.....
##.###..#....#.##.###.##.
##...#.#.##..#.#.###.....
.#....#..#..#..#..#...###
##.####....#...#...###...
#.#########.####...##..##
...###....#.##..##.#...##
##.###....#...#.##.######
.#.##.###.#.#..####..#..#
###.....##..##.##.#.#...#
....#.##.#.#.####.#...#..
....#...#..#...######.##.
##........###.###..#####.
....#.#.#..#######...##..
###.....####..#..##..####
#...##.#....####..##.#...
.##.#.#.....#.#.#..##..##
.#.#.#.##...##.###...####
.#..#.#...#......#...#..#
##.....##...#..####...###
..#####.#..###...#.#.#..#
.####.#....##..##...##..#
#.##..#.##..#.#.##..#...#
##.###.#.##########.#####`;

let map = input.split('\n').map(e => e.split(''));

let i = Math.floor(map.length / 2);
let j = Math.floor(map[0].length / 2);

let step = 0;
let direction = '';
let indected = 0;
while (step < 10000) {
  if (map[i][j] === '#') {
    direction = changeDirection(direction, 'right');
    map[i][j] = '.';
  } else {
    direction = changeDirection(direction, 'left');
    map[i][j] = '#';
    indected++;
  }
  [i, j, map] = move(i, j, direction, map);
  step++;
}

console.log(indected);

function move(i, j, d, map) {
  if (d === 'top') {
    i--;
  } else if (d === 'right') {
    j++;
  } else if (d === 'bottom') {
    i++;
  } else if (d === 'left') {
    j--;
  }

  try {
    map[i][j];
    if (i < 0 || j < 0) {
      throw 1;
    }
  } catch (e) {
    for (let row of map) {
      row.push('.');
      row.unshift('.');
    }
    map.push(Array(map.length + 2).fill('.'));
    map.unshift(Array(map.length + 1).fill('.'));
    i++;
    j++;
  }
  return [i, j, map];
}

function changeDirection(current, newd) {
  if (current === 'top') {
    if (newd === 'left') {
      return 'left';
    } else {
      return 'right';
    }
  } else if (current === 'right') {
    if (newd === 'left') {
      return 'top';
    } else {
      return 'bottom';
    }
  } else if (current === 'bottom') {
    if (newd === 'left') {
      return 'right';
    } else {
      return 'left';
    }
  } else if (current === 'left') {
    if (newd === 'left') {
      return 'bottom';
    } else {
      return 'top';
    }
  } else {
    return newd;
  }
}
