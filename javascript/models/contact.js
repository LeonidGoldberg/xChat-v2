class Contact {
    constructor(userID) {
        this.userID = userID
    }

    get firstName() {
        return 'Иван'
    }

    get lastName() {
        return 'Иванов'
    }

    get fullName() {
        return this.firstName + this.lastName
    }

    get profilePictureURL() {
        return "https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg"
    }

    fetchMessagesWithUser() {
        return [
            Message()
        ]
    }

}