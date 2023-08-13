import { useState } from "react";

export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');
  
  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
        );
        const result = await response.json();
        setSuccessMessage(result.message);
      } catch (error) {
        setError(error.message);
      }
    }
    
    return (
      <div>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  );
}



// export default function Authenticate() {
//   const [token,setToken] = useState('')
//   const [successMessage, setSuccessMessage] = useState(null)
//   const [error, setError] = useState(null)

//   useEffect (() => {
//     try {
//     const authorize = async () =>{
//       const response  = await fetch(
//         'https://fsa-jwt-practice.herokuapp.com/authenticate',{
//         method: 'GET',
//         authorization: `Bearer ${token}`,
//         headers:{
//           'Content-type': 'application/json',
  
//         }
//         }
//       );
//       const result = await response.json();
//       console.log('result',result);
//     }
//     if (token)  authorize; }
//     catch (error) {
//     console.error('sorry doesnt work', error)
//   }},[token]);
  
//     return (
//       <>
//     <h2>Authenticate!</h2>
//     {/* <button onClick={authorize} value={AuthenticateToken}></button> */}
//       </>

//     )
//   }