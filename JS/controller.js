$(function(){
    $('#button').click(() => {
        let link = $('#link').val()
        let content = $('#content').val()
        let username = $('#username').val()
        let avatar = $('#avatar').val()
        $.post(link, {"content": content, "username": content, "avatar": avatar})
    })
});
