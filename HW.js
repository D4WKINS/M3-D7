window.onload = () =>{
    generateUsers()
  }


  const generateUsers = async () =>{
    try{
        const response = await fetch ("https://jsonplaceholder.typicode.com/users" )
        const data = await response.json()
        const userTable = document.getElementById("user-details")

        data.forEach(obj=>{
           userTable.innerHTML+= `<tr>
                        <th scope="row">${obj.id}</th>
                        <td>${obj.name}</td>
                        <td>${obj.username}</td>
                        <td>${obj.email}</td>
                        <td>${obj.phone}</td>
                        <td>${obj.address.street}<br>${obj.address.suite}</td>
                        <td>${obj.address.zipcode}</td>
                        </tr>`
       }) 

       filterSearch(data)

     
    }
    catch(err){
        console.log("Houston we have problem", err)
    }
  }


function filterSearch(data){
    /** Get drop down selected Value  */
    let selected =""
    const dropdownBtn = document.getElementById("dropdownbtn")
    const dropdownItems = document.querySelectorAll(".dropdown-item")

    dropdownItems.forEach(item =>{
    item.onclick = (e) =>{
            selected = e.target.value
            dropdownBtn.innerText = selected
            console.log(selected)
    }})
    /*--------------------------*/

    const searchInput = document.getElementById("search-input")
    searchInput.onkeyup = (e) =>{
        console.log(e.target.value)
    }
  
}
