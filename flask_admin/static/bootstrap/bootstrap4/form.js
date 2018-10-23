// Boostrap 4 modal remote content
$('body').on('click', '[data-toggle="modal"]', function(){
    $($(this).data("target")+' .modal-content').load($(this).data("remote"));
});
