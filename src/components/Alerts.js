import React from 'react';
import Swal from 'sweetalert2';

const CustomAlert = (params) => {
    const confirmation = () => {
        Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'Confirmed!',
            'Your have confirmed your option.',
            'success'
            )
        }
        })
    }

    const error = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }

    const information = () => {
        Swal.fire({
            title: '<strong>Information</strong>',
            icon: 'info',
            html:
                'You can use <b>bold text</b>, ' +
                '<a href="//sweetalert2.github.io">links</a> ' +
                'and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                'Great!',
            cancelButtonText:
                'I am not interested',
            })
        }

    return (
        <div>
            <button onClick={() => confirmation()}>Confirm</button>
            <button onClick={() => error()}>Error</button>
            <button onClick={() => information()}>Information</button>
        </div>
    );
}
export default CustomAlert;