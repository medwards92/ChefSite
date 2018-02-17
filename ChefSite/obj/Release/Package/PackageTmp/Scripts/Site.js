$(function ($) {
    $('.sendContactForm').on('click', function (e) {
        e.preventDefault();

        var dividerBox = $(this.closest('.dividerBox')),
            contactForm = dividerBox.find('.contactForm'),
            fullName = contactForm.find('#FullName').val(),
            phoneNumber = contactForm.find('#PhoneNumber').val(),
            emailAddress = contactForm.find('#EmailAddress').val(),
            eventType = contactForm.find('#EventType').val(),
            eventDate = contactForm.find('#EventDate').val(),
            comments = contactForm.find('#Comments').val(),
            contactResponse = dividerBox.find('.contactFormResponse');

        var valid = fullName !== '' && phoneNumber !== ''
            && emailAddress !== '' && eventDate !== '';

        if (valid) {
            var ajaxData = {
                'FullName': fullName,
                'PhoneNumber': phoneNumber,
                'EmailAddress': emailAddress,
                'EventType': eventType,
                'EVentDate': eventDate,
                'Comments': comments
            };

            $.ajax({
                url: "Home/SendContactEmail",
                method: "POST",
                data: ajaxData,
                dataType: "json"
            }).success(function () {
                contactForm.hide();
                contactResponse.show();
            });
        }
    });
}, jQuery);