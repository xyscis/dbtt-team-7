<template>
    <div>
        
        <div class="login-wrapper">
            <div class="login-container ">
                <form @submit.prevent="login">
                    <h2>Login</h2>
                    <div class="input-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" v-model="credentials.username" required>
                    </div>
                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" v-model="credentials.password" required>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            credentials: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            // default username and password for login
            if (this.credentials.username === 'john' && this.credentials.password === 'password123') {
                console.log('Login successful');
                this.$router.push({ name: 'Home' });
            } else {
                alert('Incorrect username or password!');
            }
        }
    }
}
</script>





<!-- styling for the login page -->
<style scoped>
.login-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    width: 70vw;
}


.login-container {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
    text-align: center;
}

.input-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
}

button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #5c6bc0;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #3f51b5;
}

a {
    display: block;
    text-align: center;
    margin-top: 10px;
    color: #3f51b5;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>