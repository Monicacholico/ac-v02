// import axios from "axios";
// import API_KEY from "./credentials";


// const url='https://cors-anywhere.herokuapp.com/https://sahmed93846.activehosted.com/api/3/contacts';
// const config = {
//     headers: {
//         "Api-Token": `${API_KEY}`,
//         "Content-Type": "application/json"
//         // "Access-Control-Allow-Origin": "*",
//         // "Access-Control-Allow-Headers": "Content-Type",
//         // "Access-Control-Allow-Methods": "POST, GET, OPTIONS"

//     }

// }
// async function FetchPost() {
//     try {
//         const response = await axios.get(
//             url, config
//         );
//         console.log(response);
//     } catch(error) {
//         alert(error.message);
//         console.log(error.message);
//     }

// }

// FetchPost();


// export default FetchPost;

// function Execute() {
//   const url = 'https://cors-anywhere.herokuapp.com/https://sahmed93846.activehosted.com/api/3/contacts';
//   const options = {
//       method: 'GET',
//       headers: {
//           "Api-Token": `${API_KEY}`,
//           "Accept": "application/json"
//           // "Access-Control-Allow-Origin": "*",
//           // "Access-Control-Allow-Headers": "Content-Type",
//           // "Access-Control-Allow-Methods": "POST, GET, OPTIONS"
//       }
//   };
//   return fetch(url, options).then(
//       response => {
//           return response.json();
//       })
//       .then(data => {
//           console.log(data);
//           const listOfContacts = data.contacts;
//           console.log(listOfContacts);
//           for(let contact of listOfContacts){
//             console.log( contact);
//           }
//       })

// }

// const listOfContacts = Execute();
//         console.log(listOfContacts);

// export default Execute;




