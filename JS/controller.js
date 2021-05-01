$(function(){
    $('#button').click(() => {
        let elements = ['#link', '#username', '#avatar', '#message']
        let arr = [];
        for (const e of elements){
            let doc = $(`#${e}`)
            arr.push(doc.val())
        }
        $.post(arr[0], {"content": arr[3], "username": arr[1], "avatar": arr[2]})
    })
});