
const auth = {
    isAuthenticated : false,
    message:'',
    authenticate(email, password, cb) {
        console.log('my callback ',cb);
        if(email === 'test@test.com' && password ==='test1234'){
            this.isAuthenticated = true,
            this.message='';
            setTimeout(cb,100)
        }
        else{
            this.message='Invalid Username and password';
            setTimeout(cb, 100)
        }
        
    }
}


export default auth;