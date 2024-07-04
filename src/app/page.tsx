export default function Home() {
 // import { useState, useEffect } from 'react';

// export default function TelaInicial() {

//   const [lembrarMe, setLembrarMe] = useState(false);
//   const [usuario, setUsuario] = useState('');
//   const [senha, setSenha] = useState('');

//   useEffect(() => {
//     // Verifica o armazenamento local para ver se o usuário deseja ser lembrado
//     const lembrarMeStorage = localStorage.getItem('lembrarMe');
//     if (lembrarMeStorage === 'true') {
//       const usuarioStorage = localStorage.getItem('usuario');
//       const senhaStorage = localStorage.getItem('senha');
//       setLembrarMe(true);
//       setUsuario(usuarioStorage);
//       setSenha(senhaStorage);
//     }
//   }, []);

//   const handleLembrarMeChange = () => {
//     setLembrarMe(!lembrarMe);
//   };

//   const handleLogin = () => {
//     if (lembrarMe) {
//       // Se o usuário deseja ser lembrado, salve os dados no armazenamento local
//       localStorage.setItem('lembrarMe', 'true');
//       localStorage.setItem('usuario', usuario);
//       localStorage.setItem('senha', senha);
//     } else {
//       // Caso contrário, limpe os dados do armazenamento local
//       localStorage.removeItem('lembrarMe');
//       localStorage.removeItem('usuario');
//       localStorage.removeItem('senha');
//     }

//     // Lógica de autenticação aqui
//   };

return (
  <div className="background-with-border rounded-lg" id="myheader">
    <div className=" absolute flex inset-y-0 left-4 top-4 bottom-4 bg-yellow-400 ">
      <div className="max-w-md w-full space-y-10 p-24 bg-neutral-300 shadow-md">
     
        <div>
          <h1 className="font-irish-grover mx-auto text-gray-500 text-2xl sm:text-2xl md:text-2xl lg:text-2xl pb-2" id="titlelogo">
          s
          </h1>

          <img className="mx-auto h-32 w-48" src="./src/assets/processenglish.svg" alt="User Icon" />
          
          <h2 className="mt-2 text-center text-xl font-irish text-gray-500">Faça seu Login</h2>
        </div>
        
        <form className="mt-8 space-y-6" action="#" method="POST">
           {/* <div className="rounded-md shadow-sm -space-y-px"> */}
           <div className="flex pb-2">

<span className="inline-flex items-center p-3 border-t bg-gray-400 border-r rounded-l-md">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
</span>

<input
  id="username"
  name="usuario"
  type="text"
  autoComplete="username"
  required
  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 sm:text-xl border-gray-200 rounded-r-md"
  // placeholder="Usuário"
  // value={usuario}
  // onChange={(e) => setUsuario(e.target.value)}
  />
  </div>
              <div className="flex">
                <span className="inline-flex items-center p-3 border-t bg-gray-400 border-r rounded-l-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                  </svg>
                </span>
                <div className="flex w-full">
                  <input
                    id="senha"
                    name="senha"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 text-xl border-gray-200 rounded-r-md"
                    // placeholder="Senha"
                    // value={senha}
                    // onChange={(e) => setSenha(e.target.value)}
                  />
                </div>
              </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-100 rounded"
                // checked={lembrarMe}
                // onChange={handleLembrarMeChange}
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Lembrar-me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Esqueceu a senha?
              </a>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-gray-400 hover-bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              // onClick={handleLogin}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Entrar
            </button>
          </div>
          <div>
            <button type="url" className="group relative w-full flex justify-center py-2  px-4 border border-transparent text-sm font-medium rounded-md text-black bg-gray-400 hover-bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cadastre-se</button>
          </div>
        </form>
      </div>
      
    </div>
  </div>
);
}