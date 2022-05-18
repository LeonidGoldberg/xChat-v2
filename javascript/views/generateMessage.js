function generateMessage(msg) {
    var bubbleDirection = 'right';
        var offsetSetting = 'offset-md-5';
        if (!msg.sent) {
            bubbleDirection = 'left'
            offsetSetting = ' '
        };
        var HTMLCode = `
        <div class="row no-gutters ">
                <div class="col-md-7 ` + offsetSetting + ` col-sm-12">
                <div class="chat-bubble chat-bubble--` + bubbleDirection + `">
                    <p>` + msg.content + `</p>
                    <div class="time text-muted small">` + this.date.getHours() + ':' + this.date.getMinutes() + `</div>
                </div>
                </div>
            </div>
        `;
        return HTMLCode;
}