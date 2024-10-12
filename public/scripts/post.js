let comments = document.getElementById("comments")
let userAction = document.getElementById("userAction")
let commentVisible = document.getElementById("commentVisible")
post = [
        {
                username : "David",
                picture : "a random pics",
                content : "Nice to finally meet you"
        },
        {
                username : "Joseph",
                picture : "a random pics",
                content : "How u doing mate"
        },
        {
                username : "Tifeh",
                picture : "a random pics",
                content : "Welcome to the platform"
        },
        {
                username : "Rokanmi",
                picture : "a random pics",
                content : "She's on the screen"
        }


     
]

function commentsDisplay(){
   
    userAction.style.visibility = "hidden"
    post.forEach(element => {
        commentVisible.innerHTML += 
        `   
            <div class="mainCommentDiv">
        <div class="userCommentsProfile">
            <p> ${element.picture} </p>
            <p> ${element.username} </p>
        </div>
            <p> ${element.content} </p>
            </div>
        `

        
        
    });
        
}   
