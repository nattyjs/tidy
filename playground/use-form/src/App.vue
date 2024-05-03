<script setup lang="ts">
import { configure, useForm, Validators } from '@nattyjs/tidy';
configure({
  errorMessage:{
    validator:{
      required:'This field is required.'
    }
  }
})
const user = {userName:''};
const form = useForm(user,{
    validators:{
      userName:[
      Validators.required(),
      Validators.minLength({value:6}),
      Validators.alphaNumeric(),
      Validators.maxLength({value:10})
      ]
    }
  })

function submit(){
console.log(form.userName)
}
</script>

<template>

  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6">
        <div>
          <label class="block text-sm font-medium leading-6 text-gray-900">User Name</label>
          <div class="mt-2">
            <input type="text" v-model="form.userName"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        <div>
          <span v-if="form.errorMessage.userName">{{ form.errorMessage.userName }}</span>
        </div>
        <div>
          <button @click="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
            in</button>
        </div>
      </form>
    </div>
  </div>
</template>
