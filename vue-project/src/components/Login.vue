<template>
    <div class="full-screen-container">
        <div class="card-container">
            <div class="login-section">
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
            <div class="text-section">
                <h2>Welcome to Southwest Airlines Operations Crew Scheduling System</h2>
                <p>Enter your login details to start accessing.</p>
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
        };
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
};
</script>

<style scoped>
.full-screen-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 70vw;
    /* background-color: #f9f9f9; */
}

.card-container {
    display: flex;
    width: 900px;
    /* Or desired width */
    height: 500px;
    /* Or desired height */
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    overflow: hidden;
}

.login-section,
.text-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
}

.login-section {
    background-color: #fff;
}

.text-section {
    background-color: #3f51b5;
    color: white;
}

.input-group input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

button {
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
</style>