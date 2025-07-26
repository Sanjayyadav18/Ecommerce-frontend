const register=()=>{
    return `
    
    <div class="register">
<form action="">
    <div><h1>Register</h1></div>
    <div>
        <input type="text" name="name" placeholder="Name">
        <span></span>
    </div>
    <div>
        <input type="email" name="email" placeholder="Email">
    </div>
    <div>
       <input type="password" name="password" placeholder="Password">
    </div>
    <div>
        <input type="password" name="repassword" placeholder="Re-password">
    </div>
    <div>
        <textarea name="address" placeholder="Address"></textarea>
    </div>
    <div>
        <input type="file">
    </div>
    <div>
        <button type="submit">Submit</button>
    </div>
</form>

</div>









    `
}
export default register