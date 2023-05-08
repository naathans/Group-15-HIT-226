var defaultThreads = [
    {
        id: 1,
        title: "My camera filter from Greeny seems to be faulty...",
        author: "Johnny",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Naathan",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Johnny",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 2,
        title: "Possible ways to use filter and lenses at the same time?? Are they adaptable?",
        author: "Jared",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there, what do you mean?"
            },
            {
                author: "Jared",
                date: Date.now(),
                content: "Hey to you too, like with other lens companies like Sony ETC"
            }
        ]
    },
    {
        id: 3,
        title: "My name is Cat and I want to get into photography; is this a good brand?",
        author: "Cat",
        date: Date.now(),
        content: "Thread content 3",
        comments: [
            {
                author: "Naathan",
                date: Date.now(),
                content: "Hey there, glad to hear that - I can vouch for this brand as nearly all my gear is from Greeny!"
            },
            {
                author: "An",
                date: Date.now(),
                content: "Hey like wise - lol"
            },
            {
                author: "Bradley",
                date: Date.now(),
                content: "Hey I prefer Urth - lolz"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}

///localStorage.clear(); 
/// Uncomment me if you want to clear the database
