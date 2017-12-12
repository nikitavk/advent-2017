const input = `0 <-> 2
1 <-> 1
2 <-> 0, 3, 4
3 <-> 2, 4
4 <-> 2, 3, 6
5 <-> 6
6 <-> 4, 5`;

let rules = input
  .split(`\n`)
  .map(e => e.split('<->'))
  .map(e => ({
    name: e[0].trim(),
    friends: e[1].split(',').map(e => e.trim()),
  }));

let zeroFriends = [];

findAllAccessible('0', zeroFriends);
console.log(zeroFriends);

function findAllAccessible(name, friends) {
  let rule = findRule(name);
  console.log(rule);
  friends.push(...rule.friends);
  for (let friend of rule.friends) {
    if (!friends.includes(friend)) return findAllAccessible(friend, friends);
  }
}

function findRule(name) {
  return rules.filter(r => r.name === name)[0];
}

function findAccessible(name) {
  return rules.filter(r => r.name === name)[0].friends;
}
