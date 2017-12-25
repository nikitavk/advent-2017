const input = `Begin in state A.
Perform a diagnostic checksum after 12794428 steps.

In state A:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state B.
  If the current value is 1:
    - Write the value 0.
    - Move one slot to the left.
    - Continue with state F.

In state B:
  If the current value is 0:
    - Write the value 0.
    - Move one slot to the right.
    - Continue with state C.
  If the current value is 1:
    - Write the value 0.
    - Move one slot to the right.
    - Continue with state D.

In state C:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the left.
    - Continue with state D.
  If the current value is 1:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state E.

In state D:
  If the current value is 0:
    - Write the value 0.
    - Move one slot to the left.
    - Continue with state E.
  If the current value is 1:
    - Write the value 0.
    - Move one slot to the left.
    - Continue with state D.

In state E:
  If the current value is 0:
    - Write the value 0.
    - Move one slot to the right.
    - Continue with state A.
  If the current value is 1:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state C.

In state F:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the left.
    - Continue with state A.
  If the current value is 1:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state A.`;

let state = input.split('\n')[0].split(' ');
state = state[state.length - 1].slice(0, -1);
let steps = input.split('\n')[1].split(' ');
steps = steps[steps.length - 2];

let text = input.split('In state');
text = text.splice(1, text.length - 1);

let bp = {};

for (let t of text) {
  let name = t.split(':')[0].trim();
  let rules = t.split('\n');
  let rule = { 0: {}, 1: {} };

  rule[0].write = rules[2].split(' ');
  rule[0].write = +rule[0].write[rule[0].write.length - 1];
  rule[0].move = rules[3].split(' ');
  rule[0].move = rule[0].move[rule[0].move.length - 1] === 'left.' ? -1 : 1;
  rule[0].next = rules[4].split(' ');
  rule[0].next = rule[0].next[rule[0].next.length - 1].slice(0, -1);

  rule[1].write = rules[6].split(' ');
  rule[1].write = +rule[1].write[rule[1].write.length - 1];
  rule[1].move = rules[7].split(' ');
  rule[1].move = rule[1].move[rule[1].move.length - 1] === 'left.' ? -1 : 1;
  rule[1].next = rules[8].split(' ');
  rule[1].next = rule[1].next[rule[1].next.length - 1].slice(0, -1);
  bp[name] = rule;
}

let tape = { 0: 0 };
index = 0;

for (let i = 0; i < steps; i++) {
  if (!tape[index]) tape[index] = 0;
  let rule = bp[state][tape[index]];
  state = rule.next;
  tape[index] = rule.write;
  index += rule.move;
}

let oneCount = 0;

for (let t in tape) {
  if (tape[t] === 1) {
    oneCount++;
  }
}

console.log(oneCount);
