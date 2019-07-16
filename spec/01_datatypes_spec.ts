describe('data types', () => {
    describe('declaring variables', () => {
        it('using let', () => {
            let x: string | number;

            x = 'Blue';
            x = 19;

            expect(x).toBe(19);

            let y = 34;

            // y = 'tacos'; compile error (not allowed)

            expect(y).toBe(34);

        });
        it('using const', () => {
            const PI = 3.1415;

            //PI = 3; compile error (not allowed)

            const favoriteColors = ['blue', 'red', 'green'];
            // favoriteColors = []; (not allowed)

            favoriteColors[0] = 'Purple';
            expect(favoriteColors[0]).toBe('Purple');
        });
        it('has a var keyword but don\'t use it because it is broken', () => {
            let age = 22;

            if (age > 21) {
                var message = 'Old Enough'; // Do not do this. Ever. Don't Use VAR
            }
            expect(message).toBe('Old Enough');
        });
    });
    describe('literals in typescript', () => {
        it('has numeric literals', () => {
            let x1 = 12;
            let x2 = 12.3;
            let x3 = 1_000_000; // you can put underscores in the thousands places for readability (TS only);
            let x4 = 0xff; // 0x means this a hexadecimal (base 16) number;
            let x5 = 0o22; // 0o means it is a base 8 (octal);
            let x6 = 0b1101; // 0b means it is binary (base 2);
        });
        it('has string literals', () => {
            let name = 'Sean';
            expect(name).toBe("Sean");

            //name = 'Flannery O\'Conner';
            name = "Flannery O'Conner";
            let quote = 'As Emerson said, "A foolish consistency is the hobgoblin of small minds".';
            quote = "As Emerson said, \"A foolish consistency is the hobgoblin of small minds\".";
        });
        it('has template strings', () => {
            let story = `Chapter 1.
            
            It was a dark and stormy night.
            
            The End`;

            console.log(story);

            let name = 'Bob', age = 53;

            let info = `The name is ${name} and the age is ${age}`;
            expect(info).toBe('The name is Bob and the age is 53');

            let message = `This is just a "string" by 'Jeff'`;
        });
        it('has the standard stuff', () => {
            let oldEnough = true;
            let tooYoung = false;

            expect("dog").toBeTruthy();
            expect("").toBeFalsy();
            expect(99).toBeTruthy();
            expect(0).toBeFalsy();
            expect(-1).toBeTruthy();
            expect(undefined).toBeFalsy();
            expect(null).toBeFalsy();
            expect(({})).toBeTruthy();
            expect([]).toBeTruthy();
        });
        it('has array literals', () => {
            let shoppingList: string[] = [];

            shoppingList[0] = 'Bread';
            shoppingList[1] = 'Shampoo';
            shoppingList[999] = 'Beer';

            let x = shoppingList[0];

            expect(shoppingList[999]).toBe('Beer');
            expect(shoppingList[22]).toBeUndefined();
        });
        it('destructuring arrays', () => {
            const shoppingList = ['Bread', 'Shampoo', 'Beer'];

            //const first = shoppingList[0];
            //const third = shoppingList[2];

            const [first, , third, fourth] = shoppingList;

            expect(first).toBe('Bread');
            expect(third).toBe('Beer');
            expect(fourth).toBe(undefined);

            const [head, ...rest] = shoppingList;
            expect(head).toBe('Bread');
            expect(rest).toEqual(['Shampoo', 'Beer']);
        });
        it('also has a spread operator', () => {
            let numbers = [1, 2, 3, 4, 5, 6];
            let numbers2 = [0, ...numbers, 7];
            expect(numbers2).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
            expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
        });
        it('has tuples.', () => {

            // let shoppingList: (string | number)[] = ['cat', 13, 'dog'];
            // let shoppingList: Array<string | number> = ['cat', 13, 'dog'];

            type Musician = [string, string, number, string];
            let warren: Musician = ['Warren', 'Ellis', 51, 'Musician'];

            const [, lastName, howOld] = warren;
            expect(lastName.toUpperCase()).toBe('ELLIS');
            expect(howOld).toBe(51);
        });
    });
});