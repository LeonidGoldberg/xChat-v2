class Message {
    constructor(content, sender, recipient, sent, date = new Date()) {
        this.content = content
        this.sender = sender
        this.recipient = recipient
        this.sent = sent
        this.date = date
    }

    generateHTML() {
        var bubbleDirection = 'right';
        var offsetSetting = 'offset-md-5';
        if (!this.sent) {
            bubbleDirection = 'left'
            offsetSetting = ' '
        };
        var HTMLCode = `
        <div class="row no-gutters ">
                <div class="col-md-7 ` + offsetSetting + ` col-sm-12">
                <div class="chat-bubble chat-bubble--` + bubbleDirection + `">
                    <p>` + this.content + `</p>
                    <div class="time text-muted small">` + this.date.getHours() + ':' + this.date.getMinutes() + `</div>
                </div>
                </div>
            </div>
        `;
        return HTMLCode;
    }
};

