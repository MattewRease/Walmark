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

    return {
        reminders,
        tasks
    };
};
