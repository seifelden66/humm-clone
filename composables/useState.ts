export const side = ref(false)
export const open = ()=> side.value = true
export const close = ()=> side.value = false
// export const limit = ref(1);
// export const incrementLimit = () => {
//     limit.value++;
//   };