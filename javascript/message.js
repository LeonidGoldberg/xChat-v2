class Message {
    constructor(content, sent, date = new Date()) {
        this.content = content
        this.sent = sent
        this.date = date
    }

    generateHTML() {
        var bubbleDirection = 'right';
        if (!this.sent) {
            bubbleDirection = 'left'
        };
        var HTMLCode = `
        <div class="row no-gutters ">
                <div class="col-md-5 offset-md-7">
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

msg = new Message("hi", false);
console.log(msg.generateHTML());