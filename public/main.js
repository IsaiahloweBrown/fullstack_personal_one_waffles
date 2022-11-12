var cart = document.getElementsByClassName("fa-shopping-cart");
var notDelivered = document.getElementsByClassName("fa-exclamation-circle");
var trash = document.getElementsByClassName("fa-trash-o");

Array.from(cart).forEach(function(element) {
      element.addEventListener('click', function(){
        // const name = this.parentNode.parentNode.childNodes[1].innerText
        // const sizes = this.parentNode.parentNode.childNodes[3].innerText
        // const styles = this.parentNode.parentNode.childNodes[5].innerText
        // const sides = this.parentNode.parentNode.childNodes[7].innerText
        // const status = this.parentNode.parentNode.childNodes[9].innerText
        const id = this.parentNode.parentNode.childNodes[15].innerText
        fetch('orders', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          // change to reflect changes in routes.js 
          //id here 'id': id
          body: JSON.stringify({
              id: id
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(notDelivered).forEach(function(element) {
  element.addEventListener('click', function(){
    // const name = this.parentNode.parentNode.childNodes[1].innerText
    // const sizes = this.parentNode.parentNode.childNodes[3].innerText
    // const styles = this.parentNode.parentNode.childNodes[5].innerText
    // const sides = this.parentNode.parentNode.childNodes[7].innerText
    // const status = this.parentNode.parentNode.childNodes[9].innerText
    const id = this.parentNode.parentNode.childNodes[15].innerText
    fetch('notDelivered', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: id
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

// Array.from(notDelivered).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         //add phone number
//         const cart = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         const notDelivered = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         console.log(notDelivered)
//         //fetches to api created in routes
//         //a request
//         fetch('dislikes', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'cart': cart
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const sizes = this.parentNode.parentNode.childNodes[3].innerText
        const styles = this.parentNode.parentNode.childNodes[5].innerText
        const sides = this.parentNode.parentNode.childNodes[7].innerText
        fetch('orders', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'sizes': sizes,
            'styles': styles,
            'sides': sides,
         
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
