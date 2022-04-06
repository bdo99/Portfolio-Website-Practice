$(function(){
    var $comment_form = $("#comment_form");
    if($comment_form.length){
        $comment_form.validate({
            rules:{
                firstname:{
                    required: true
                },
                lastname:{
                    required: true
                },
                email:{
                    required: true,
                    email: true
                }
            },
            messages:{
                firstname:{
                    required: 'First name is mandatory!'
                },
                lastname:{
                    required: 'Last name is mandatory!'
                },
                email:{
                    required: 'Email is mandatory!'
                }
            }
        })
    }
})