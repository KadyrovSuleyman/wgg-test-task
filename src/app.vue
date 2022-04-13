<script setup lang="ts">

let VK: any;

const script = document.createElement('script');
script.src = 'https://vk.com/js/api/openapi.js?169';
document.head.append(script);

const get = () => {
  VK.Auth.login((data) => {
    VK.Api.call('friends.get', {
      user_id: data.session.user.id, v: '5.134', fields: 'nickname, photo_50', order: 'random',
    }, (r) => {
      console.log(r);
    });
  });
};

script.onload = () => {
  VK = window.VK;

  Promise.resolve()
    .then(() => {
      VK.init({
        apiId: 8136088,
      });
    })
    .then(() => {
      // get();
    });
};

</script>

<template>
  <div>Hello world</div>
</template>

<style lang="scss">

</style>
