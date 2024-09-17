
document.getElementById('post-btn').addEventListener('click',function(){
    const newComment = document.getElementById('new-comment');
    const commentBox = newComment.value;

    const p = document.createElement('p');
    const commentContainer = document.getElementById('comment-container')
    commentContainer.appendChild(p)

    p.innerText = commentBox;

    newComment.value = ''
})
