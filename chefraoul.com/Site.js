/* SmtpJS.com - v2.0.1 */
Email = { send: function (e, o, t, n, a, s, r, c) { var d = Math.floor(1e6 * Math.random() + 1), i = "From=" + e; i += "&to=" + o, i += "&Subject=" + encodeURIComponent(t), i += "&Body=" + encodeURIComponent(n), void 0 == a.token ? (i += "&Host=" + a, i += "&Username=" + s, i += "&Password=" + r, i += "&Action=Send") : (i += "&SecureToken=" + a.token, i += "&Action=SendFromStored", c = a.callback), i += "&cachebuster=" + d, Email.ajaxPost("https://smtpjs.com/v2/smtp.aspx?", i, c) }, sendWithAttachment: function (e, o, t, n, a, s, r, c, d) { var i = Math.floor(1e6 * Math.random() + 1), m = "From=" + e; m += "&to=" + o, m += "&Subject=" + encodeURIComponent(t), m += "&Body=" + encodeURIComponent(n), m += "&Attachment=" + encodeURIComponent(c), void 0 == a.token ? (m += "&Host=" + a, m += "&Username=" + s, m += "&Password=" + r, m += "&Action=Send") : (m += "&SecureToken=" + a.token, m += "&Action=SendFromStored"), m += "&cachebuster=" + i, Email.ajaxPost("https://smtpjs.com/v2/smtp.aspx?", m, d) }, ajaxPost: function (e, o, t) { var n = Email.createCORSRequest("POST", e); n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.onload = function () { var e = n.responseText; void 0 != t && t(e) }, n.send(o) }, ajax: function (e, o) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; void 0 != o && o(e) }, t.send() }, createCORSRequest: function (e, o) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, o, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, o) : t = null, t } };

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
			var emailSubject = 'Contact Request - ' + fullName;
            var emailBody = 'Phone Number: ' + phoneNumber + '\r\n'
                + 'Event Type: ' + eventType + '\r\n'
                + 'Event Date: ' + eventDate + '\r\n'
                + 'Comments: ' + comments;

			Email.send(emailAddress,
				'chef@chefraoul.com',
				emailSubject,
				emailBody,
				{token: '2c8ec830-55de-4da0-9a42-8016a0794ad5'});
				
			contactForm.hide();
			contactResponse.show();
        }
    });
	
	$('.menuItem').on('click', function (e) {		
		var fileName = $(e.currentTarget).data('menuName'),
			fileSrc = 'Menus\\' + fileName + '.pdf#toolbar=0&navpanes=0&statusbar=0&view=auto';
				
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			window.open(fileSrc, '_blank');
		} else {
			$('.modal-dialog > embed').attr('src', fileSrc);
			$('.modal-dialog').show();
			$('.modal-backdrop').show();
		}
	});
	
	$('.modal-backdrop').on('click', function () {
		$('.modal-dialog').hide();
		$('.modal-backdrop').hide();
	});
	
	$('.modal-dialog').on('click', function (e) {
		e.stopPropagation();
	});
}, jQuery);