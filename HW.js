window.onload = () =>{
    generateUsers()
  }

 
// new Date 
//Creates a new date

function filterSearch(data){
    const userTable = document.getElementById("user-details")
    /** Get drop down selected Value  */
    let selected =""
    const dropdownBtn = document.getElementById("dropdownbtn")
    const dropdownItems = document.querySelectorAll(".dropdown-item")

    dropdownItems.forEach(item =>{
    item.onclick = (e) =>{
            selected = e.target.value
            dropdownBtn.innerText = selected
            // console.log(selected)
    }})
    /*--------------------------*/

    
  
    const searchInput = document.getElementById("search-input")
    searchInput.onkeyup = (e) =>{
     let filteredData;
        let search = e.target.value
       console.log(selected)
       if(search.length > 3){
        selected  === "Name"?  filteredData = data.filter(obj => obj.name.includes(search.charAt(0).toUpperCase() + search.slice(1,search.length))):
        selected  === "Username"? filteredData = data.filter(obj => obj.username.includes(search.charAt(0).toUpperCase() + search.slice(1,search.length))):
        selected  === "Email"? filteredData = data.filter(obj => obj.email.includes(search.charAt(0).toUpperCase() + search.slice(1,search.length))): 
        console.log("No selection has been made, there is nothing to filter")
        console.log(filteredData)
        filteredData.forEach(obj=>{
            userTable.innerHTML =""
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
    }else if( search.length < 3 || search === "") {
        console.log(data)
        data.forEach(obj=>{
            userTable.innerHTML =""
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




    }
    }

  
}
