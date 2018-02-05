module.exports = () => {
    const tasks = {
        message: {
            type: 'Success', // warning or success
            title: 'Congratulations!',
            text: 'The thing you just did was a great success.'
        }
    }

    const reminders = {
        message: {
            type: 'Warning', // warning or success
            title: 'Entschuldigung Sie bitte!',
            text: 'An error occured, please try again later.'
        }
    }

    const rating = {
        message: {
            rate: '0',
            text: 'Your message wiil be here.'
        }
    }

    const articles = {
        nextUrl: '//localhost:5003/articles',
        items: [
            {
                title: 'Article A',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam asperiores dolores aspernatur tempore ipsum excepturi!',
                imageUrl: 'http://satyr.io/100x20/'
            },
            {
                title: 'Article B',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam asperiores dolores aspernatur tempore ipsum excepturi!',
                imageUrl: 'http://satyr.io/100x20/'
            },
            {
                title: 'Article C',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam asperiores dolores aspernatur tempore ipsum excepturi!',
                imageUrl: 'http://satyr.io/100x20/'
            }
        ]
    };

    return {
        reminders,
        tasks,
        rating,
        articles
    };
};
