$(document).ready(() => {
    var time = 0;
    // If one of the field is not empty disable the other input
    $('#unix-time').on('input', () => {
        if(!($('#unix-time').val().length === 0)) {
          $('#date-time').attr('disabled', 'disabled');
          time = $('#unix-time').val();
        }else {
            $('#date-time').removeAttr('disabled');
        }
    })
    $('#date-time').on('input', () => {
        if(!($('#date-time').val().length === 0)) {
          $('#unix-time').attr('disabled', 'disabled');
          time = $('#date-time').val();
        }else {
            $('#unix-time').removeAttr('disabled');
        }
    })

    $('#send-btn').click(() => {
      console.log(time);
      if(time != 0){
        $.get('/' + time, (data) => {
          $('#time-res').html('<p><i class="fa fa-clock-o fa-2x" aria-hidden="true"></i><span class="time-data">'+
           data.unix + '</span></p><p><i class="fa fa-calendar fa-2x" aria-hidden="true"></i><span class="time-data">'
            + data.natural + '</span></p>')
        })
      }
    })
})
