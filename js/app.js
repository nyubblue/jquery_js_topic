var contactNewsletterForm = {
    ready: function () {
        $('contactNewsletterFormSubmit').click(
            function (event) {
                var submit_btn = $(this);
                submit_btn.attr('disable', true)

                //validate
                if (true) {
                    alert("Please provide both your first and last name");
                    input.removeAttr('disabled');
                    event.preventDefault();
                } else {
                    $('form#contactNewsletterForm').submit();
                }
            }
        )
    },
    validate: function () {
        var hasRequiredValues = true;
        $('form#contactNewsletterForm').find('input, select, textarea').each(
            function () {
                var node = $(this);
                if (node.is('[required]')) {
                    var value = node.val();
                    if (!value) {
                        hasRequiredValues = false;
                        return hasRequiredValues;
                    }
                }
            }
        );
        return hasRequiredValues;
    }
}

$(document).ready(function () {
    contactNewsletterForm.ready();

});

