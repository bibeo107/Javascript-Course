const books = [
    {
        title: 'Algorithms',
        author: ['Robert Sedgewick', 'Kevin Wayne'],
        publisher: 'Addison-Wesley Professional',
        publicationDate: '2011-03-24',
        edition: 4,
        keywords: [
            'computer science',
            'programming',
            'algorithms',
            'data structures',
            'java',
            'math',
            'software',
            'engineering'
        ],
        pages: 976,
        format: 'hardcover',
        ISBN: '9780321573513',
        language: 'English',
        programmingLanguage: 'Java',
        onlineContent: true,
        thirdParty: {
            goodreads: {
                rating: 4.41,
                ratingsCount: 1733,
                reviewsCount: 63,
                fiveStarRatingCount: 976,
                oneStarRatingCount: 13
            }
        },
        highlighted: true
    },
    {
        title: 'Structure and Interpretation of Computer Programs',
        author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
        publisher: 'The MIT Press',
        publicationDate: '2022-04-12',
        edition: 2,
        keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
        pages: 640,
        format: 'paperback',
        ISBN: '9780262543231',
        language: 'English',
        programmingLanguage: 'JavaScript',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 4.36,
                ratingsCount: 14,
                reviewsCount: 3,
                fiveStarRatingCount: 8,
                oneStarRatingCount: 0
            }
        },
        highlighted: true
    },
    {
        title: "Computer Systems: A Programmer's Perspective",
        author: ['Randal E. Bryant', "David Richard O'Hallaron"],
        publisher: 'Prentice Hall',
        publicationDate: '2002-01-01',
        edition: 1,
        keywords: [
            'computer science',
            'computer systems',
            'programming',
            'software',
            'C',
            'engineering'
        ],
        pages: 978,
        format: 'hardcover',
        ISBN: '9780130340740',
        language: 'English',
        programmingLanguage: 'C',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 1010,
                reviewsCount: 57,
                fiveStarRatingCount: 638,
                oneStarRatingCount: 16
            }
        },
        highlighted: true
    },
    {
        title: 'Operating System Concepts',
        author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
        publisher: 'John Wiley & Sons',
        publicationDate: '2004-12-14',
        edition: 10,
        keywords: [
            'computer science',
            'operating systems',
            'programming',
            'software',
            'C',
            'Java',
            'engineering'
        ],
        pages: 921,
        format: 'hardcover',
        ISBN: '9780471694663',
        language: 'English',
        programmingLanguage: 'C, Java',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 3.9,
                ratingsCount: 2131,
                reviewsCount: 114,
                fiveStarRatingCount: 728,
                oneStarRatingCount: 65
            }
        }
    },
    {
        title: 'Engineering Mathematics',
        author: ['K.A. Stroud', 'Dexter J. Booth'],
        publisher: 'Palgrave',
        publicationDate: '2007-01-01',
        edition: 14,
        keywords: ['mathematics', 'engineering'],
        pages: 1288,
        format: 'paperback',
        ISBN: '9781403942463',
        language: 'English',
        programmingLanguage: null,
        onlineContent: true,
        thirdParty: {
            goodreads: {
                rating: 4.35,
                ratingsCount: 370,
                reviewsCount: 18,
                fiveStarRatingCount: 211,
                oneStarRatingCount: 6
            }
        },
        highlighted: true
    },
    {
        title: 'The Personal MBA: Master the Art of Business',
        author: 'Josh Kaufman',
        publisher: 'Portfolio',
        publicationDate: '2010-12-30',
        keywords: ['business'],
        pages: 416,
        format: 'hardcover',
        ISBN: '9781591843528',
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.11,
                ratingsCount: 40119,
                reviewsCount: 1351,
                fiveStarRatingCount: 18033,
                oneStarRatingCount: 1090
            }
        }
    },
    {
        title: 'Crafting Interpreters',
        author: 'Robert Nystrom',
        publisher: 'Genever Benning',
        publicationDate: '2021-07-28',
        keywords: [
            'computer science',
            'compilers',
            'engineering',
            'interpreters',
            'software',
            'engineering'
        ],
        pages: 865,
        format: 'paperback',
        ISBN: '9780990582939',
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.7,
                ratingsCount: 253,
                reviewsCount: 23,
                fiveStarRatingCount: 193,
                oneStarRatingCount: 0
            }
        }
    },
    {
        title: 'Deep Work: Rules for Focused Success in a Distracted World',
        author: 'Cal Newport',
        publisher: 'Grand Central Publishing',
        publicationDate: '2016-01-05',
        edition: 1,
        keywords: ['work', 'focus', 'personal development', 'business'],
        pages: 296,
        format: 'hardcover',
        ISBN: '9781455586691',
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.19,
                ratingsCount: 144584,
                reviewsCount: 11598,
                fiveStarRatingCount: 63405,
                oneStarRatingCount: 1808
            }
        },
        highlighted: true
    }
];

// Assignment https://codingheroes.io/assignments/destructuring-arrays.html

// 1. Destructuring array
// ------------------------------------------------------------
console.group(`\x1b[1m%s\x1b[0m`, `\n1. Destructuring array`);

// 1.1 ---------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `1.1`);

const [first, second] = books;

console.log(`First book title:`, first.title);
console.log(`Second book title:`, second.title);

// 1.2 ---------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `\n1.2`);

const [, , thirdBook] = books;
console.log(`Third book title: `, thirdBook.title);

// 1.3 ---------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `\n1.3`);

const ratings = [
    ['rating', 4.19],
    ['ratingsCount', 144584]
];

const [[, rating], [, ratingsCount]] = ratings;
console.log(`rating:`, rating);
console.log(`ratingsCount:`, ratingsCount);

// 1.4 ---------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `\n1.4`);

const ratingStars = [63405, 1808];

const [fiveStarRating, oneStarRating, threeStarRating = 0] = ratingStars;

console.log(`fiveStarRating:`, fiveStarRating);
console.log(`oneStarRating:`, oneStarRating);
console.log(`threeStarRating:`, threeStarRating);

console.groupEnd();

// 2. Destructuring Object
// ------------------------------------------------------------
console.group(`\x1b[1m%s\x1b[0m`, `\n2. Destructuring Object`);

// 2.1
console.log(`\x1b[1m%s\x1b[0m`, `2.1`);

const [{ title, author, ISBN }] = books;

console.log(`title:`, title);
console.log(`author:`, author);
console.log(`ISBN:`, ISBN);

// 2.2 ---------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `\n2.2`);

const [{ keywords: tags }] = books;

console.log(`tags:`, tags);

// 2.3 ---------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `\n2.3`);

const { language, programmingLanguage = 'unknown' } = books[6];

console.log(`language:`, language);
console.log(`programmingLanguage:`, programmingLanguage);

// 2.4 ---------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `\n2.3`);

let bookTitle = 'unknown';
let bookAuthor = 'unknown';

[{ title: bookTitle, author: bookAuthor }] = books;

console.log(`bookTitle:`, bookTitle);
console.log(`bookAuthor:`, bookAuthor);

// 2.5 ---------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `\n2.5`);

// const bookRating = books[0].thirdParty?.goodreads?.rating ?? 'not rating';

// Destructuring is more readable
const {
    thirdParty: {
        goodreads: { rating: bookRating }
    }
} = books[0];

console.log(`bookRating:`, bookRating);

// 2.6 ---------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `\n2.5`);
// eslint-disable-next-line no-shadow
const printBookInfo = function ({ title, author, year = 'year unknown' }) {
    console.log(`${title} by ${author}, ${year}`);
};

printBookInfo(first);

console.groupEnd();

// 11. Looping Object
// ------------------------------------------------------------
console.group(`\x1b[1m%s\x1b[0m`, '\n11. Looping Object');

// 11.1 ---------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `\n11.1`);

const entries = [];
const {
    thirdParty: { goodreads }
} = first;

Object.entries(goodreads);
for (const entry of Object.keys(goodreads)) {
    entries.push([entry]);
}

console.log(entries);

// 11.2 ---------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `\n11.2`);

for (const [index, value] of Object.values(goodreads).entries()) {
    entries[index].push(value);
}
console.log(entries);

// 11.3 ---------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `\n11.3`);

const entries2 = Object.entries(goodreads);

// 11.4 ---------------------------------

console.log(`entries:`, entries);
console.log(`entries2:`, entries2);
console.groupEnd();
