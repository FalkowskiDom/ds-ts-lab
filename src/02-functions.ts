import { colleagues, friends } from './01-basics';
import {Friend, Colleague, EmailContact } from './myTypes'

export function allOlder(friends: { name: string; age: number }[]): string[] {
  return friends.map(friend => {
    friend.age += 1;
    return `${friend.name} is now ${friend.age}`;
  });
}
console.log(allOlder(friends))


function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));
function addColleague(
  cs: Colleague[],
  name: string,
  department: string,
  email: string
): void {
  const highest = highestExtension(cs); 
  const newExtension = highest.contact.extension + 1;

  cs.push({
    name,
    department,
    contact: {
      email,
      extension: newExtension
    }
  });
}

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number
): EmailContact[] {
  const sorted = colleagues.sort(sorter); // Colleague[] inferred
  const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return result 
}

console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

function findFriends(
  friends: { name: string; age: number }[],
  criterion: (friend: { name: string; age: number }) => boolean
): string[] {
  return friends
    .filter(criterion)         // keep only friends that match the condition
    .map(friend => friend.name); // return their names
}
console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));