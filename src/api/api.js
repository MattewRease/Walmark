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

    const history = [
        {
            date: '1.07.2018',
            items: [
                {
                    title: 'My history health index',
                    index: '43',
                    optimalLiquid: '2',
                    dataLiquid: '1',
                    dailyIntake: 'insufficient',
                    liquidIcon: 'sad',
                    bmi: '8.5',
                    bmiCategory: 'To Low Weight!',
                    averageIndex: '65',
                    averageBmi: '15.3',
                    answeredYes: '63%',
                    answeredNo: '27%'
                }
            ]
        },
        {
            date: '31.12.2017',
            items: [
                {
                    title: 'My history health index',
                    index: '22',
                    optimalLiquid: '3',
                    dataLiquid: '4',
                    dailyIntake: 'insufficient',
                    liquidIcon: 'sad',
                    bmi: '10.5',
                    bmiCategory: 'To Low Weight!',
                    averageIndex: '35',
                    averageBmi: '15.3',
                    answeredYes: '75%',
                    answeredNo: '25%'
                }
            ]
        },
    ];

    return {
        reminders,
        tasks,
        rating,
        history
    };
};
