import { colleagues, friends } from './01-basics';
import {Friend, Colleague } from './myTypes'

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

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
