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
        items: [
            {
                title: 'My history health index',
                index: '43',
                optimalLiquid: '2',
                dataLiquid: '1',
                dailyIntake: 'insufficient',
                liquidIcon: 'smile',
                bmi: '8.5',
                bmiCategory: 'To Low Weight!'
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
