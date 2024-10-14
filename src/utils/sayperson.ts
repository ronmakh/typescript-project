interface Person {
    age: number,
    name: string,
    say(): string
}

export function sayIt(person: Person) {
    return person.say();
}

