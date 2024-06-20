var selectid = document.getElementByid("dropdown12").value;
document.addEventListener('wpcf7mailsent', function(event) {

    if(selectid  === "Father") {
        location = 'https://themefic.com/docs/uacf7/free-addons/contact-form-7-multi-step-forms/';
    }else{
        location = 'https://themefic.com/docs/uacf7/pro-addons/conditional-redirect-for-contact-form-7/';
    }
},false);
