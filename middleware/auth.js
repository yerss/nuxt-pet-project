export default function({ store, redirect }){
  const isAuthenticated = store.getters['auth/isAuth']
  if(!isAuthenticated){
    return redirect("/");
  }
}
