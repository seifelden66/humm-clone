<template lang="pug">

.container-fluid 
        .up
            h1 404
            h4 oops,   this page is currently unavailable
        .down 
            NuxtLink.lin(to="/")
                button.btn back to home
            
</template>

<style lang="scss" scoped>
.container-fluid {
  text-align: center;
  height: 100vh;
  margin: 0;
  background: #c90000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  h1 {
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.733);
  }
  .down {
    margin-top: 3em;
    .btn {
        border: black solid 1px;
        color: #fff;
        background: #000000e0;
        box-shadow: 5px 5px #000;
        margin-top: 2em;
        border-radius: 0px;
        padding: 5px 20px;
        transition: 300ms;
        &:hover {
          background-color: #fff;
          color: #000;
          cursor: pointer;
        }
      }
  }
}
</style>
