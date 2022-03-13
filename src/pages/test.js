const Test = ()=>{
    const send = async (e)=>{
        e.preventDefault();
        const fname=document.getElementById("fname").value;
        const file = document.getElementById("file").files[0];
        console.log(file);

        const formData = new FormData();
        formData.append("file",file);

        const res = await fetch("http://localhost:8080/test",{
            method:"POST",
            body:file,
            headers:{
                'Content-Type': 'multipart/form-data',
            },
        });
        const data = await res.json();
        console.log(data);
    }

    return(
        <>
        <form onSubmit={send}>
            First Name
                <input id="fname"></input>
            
            Last Name
                <input id="lname"></input>
            
            Date of birth
                <input type="date" id="dob"></input>
            
            email
                <input type="email" id="email"></input>
            
            Phone
                <input type="phone" id="phone"></input>
            
            Phone Alternate
                <input type="phone" id="phoneA"></input>
            
            Password
                <input type="password" id="pass"></input>
            
            Confirm Password
                <input type="password" id="confPass"></input>
            
            houseName
                <input id="houseName"></input>
            
            File
                <input type="file" id="file"></input>            
                <button>Submit</button>
            
        </form>
        </>
    );
}

export default Test;