window.onload = () =>{
    generateUsers()
  }
  const generateUsers = async () =>{
    try{
        const response = await fetch ("https://jsonplaceholder.typicode.com/users" )
        const data = await response.json()
        const userTable = document.getElementBydId("user-details")
       data.forEach(obj=>{

        <tr>
        <th scope="row">obj.id</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        </tr>
       }) 

        return console.log(data)
           
        
    }
    catch(err){
        console.log("Houston we have problem", err)
    }
  }

function getDropDownValue(e){
    let selected =""
    const dropdownBtn = document.getElementById("dropdownbtn")
      selected = e.target.value
      dropdownBtn.innerText = selected
      console.log(selected)
}