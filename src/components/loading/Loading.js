import Swal from 'sweetalert2';

function Loading() {
    Swal.fire({
        title: 'Please Wait',
        html: '<img src="https://i.stack.imgur.com/qq8AE.gif" width="50">',
        allowOutsideClick: false,
      });
}

function closeLoading() {
    Swal.close();
}

function noData(message) {
    Swal.fire({
        timer: 2000,
        title: message,
        icon: 'warning',
    });
}

export { Loading, closeLoading, noData };
