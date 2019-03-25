window.SPB = {}

$(document).ready(function() {
  var mcModal = $('#mc-modal');

  mcModal.on('show.bs.modal', function(event) {
    var modal = $(this)
    var title = '';
    var msg = '';

    if (window.SPB.mcResult.result == 'success') {
      title = "Thank you";
      msg = "We will keep you updated with news from Spectrum Biobank.";
    } else if (window.SPB.mcResult.result = 'error') {
      title = 'Error';
      msg = window.SPB.mcResult.msg;
    } else {
      title = "Error";
      msg = 'An unknown error occurred.  Please try again.';
    };

    modal.find('.modal-title').text(title);
    modal.find('.modal-body').text(msg)
  });

  mcModal.on('hidden.bs.modal', function(e) {
    $('.spb-welcome input[type=email]').val('');
    if (window.SPB.mcResult.result == 'success') {
      $('.spb-welcome .btn').attr('disabled', true);
    }
  });

  //
  $('.spb-welcome .btn').click(function(e) {
    e.preventDefault();
    var email = $('.spb-welcome input[type=email]').val();
    var form = $('.spb-welcome form');
    console.log(email);
    if (!email) {
      console.log('nothing');
      return;
    }

    $.ajax({
      type: 'GET',
      url: form.attr('action'),
      data: form.serialize(),
      cache: false,
      crossorigin: null,
      dataType: 'jsonp',
      jsonp: 'c',
      contentType: "application/json; charset=utf-8",
      error: function(err) {
        window.SPB.mcResult = {
          result: 'error',
          msg: err
        };
        console.log('error');
        console.log(err);
        mcModal.modal({});
      },
      success: function(data) {
        window.SPB.mcResult = {
          result: data.result,
          msg: data.msg
        };
        console.log('success');
        console.log(data);
        mcModal.modal({});
      }
    });


  });

});
