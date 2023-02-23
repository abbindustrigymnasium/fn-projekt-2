<template>
    <header>

    </header>
    <div class="flex justify-center">
        <div class="signInput w-1/5 h-2/4 m-4 ">
            <div class="username inputs mb-20 my-3">
                <label class="label" for="username">Username:</label><br>
                <input v-model="UserInput" class="border-black border-2 border-solid rounded-md p-0.5 mt-4" type="text"
                    id="username" name="username" placeholder="Username"><br>
            </div>
            <div class="password inputs my-10">
                <label class="label" for="password">Password:</label><br>
                <input v-model="PassInput" class="border-black border-2 border-solid rounded-md p-0.5" type="password"
                    id="password" name="password" placeholder="Password">
            </div>
            <div class="inputs">
                <button @click="newUser" class="border-black border-2 border-solid rounded-md p-0.5 m-4">Submit</button>
            </div>
        </div>
    </div>
</template>

<style>
.signInput {
    padding: 10px;
    border: black solid 3px;
    border-radius: 15px;
}

.label {
    text-align: center;
    font-size: x-large;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>

<script setup>
import { ref} from 'vue';
import axios from 'axios';

const UserInput = ref('')
const PassInput = ref('')

const PostUrl = 'http://localhost:3000/users'

function newUser() {

    const user = {
        Username: UserInput.value,
        Password: PassInput.value
    }

    const createUser = async () => {
        try {
            const resp = await axios.post(PostUrl, JSON.stringify({Username: UserInput.value, Password: PassInput.value}));
            console.log(resp.data);
        } catch (error) {
            console.log(error.response);
        }
    }

    createUser(user)
        .then(data => console.log(data))
        .catch(error => console.log(error));

    // axios.post('http://localhost:3000/users', user).then((res) => {
    //   user.value.push(res.data)
    // })   
}

</script>