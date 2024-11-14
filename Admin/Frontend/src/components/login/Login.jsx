// // import React, { useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { login } from "../../store/authSlice";

// // const Login = () => {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const dispatch = useDispatch();
// //   const { isLoading, error } = useSelector((state) => state.auth);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     dispatch(login({ username, password }));
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <h2>Admin Login</h2>
// //       {error && <p>{error}</p>}
// //       <div>
// //         <label htmlFor="username">Username:</label>
// //         <input
// //           type="text"
// //           id="username"
// //           value={username}
// //           onChange={(e) => setUsername(e.target.value)}
// //           required
// //         />
// //       </div>
// //       <div>
// //         <label htmlFor="password">Password:</label>
// //         <input
// //           type="password"
// //           id="password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //         />
// //       </div>
// //       <button type="submit" disabled={isLoading}>
// //         {isLoading ? "Logging in..." : "Login"}
// //       </button>
// //     </form>
// //   );
// // };

// // export default Login;
// ////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { login, clearError } from "../../store/authSlice";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isLoading, error, token } = useSelector((state) => state.auth);

//   useEffect(() => {
//     // إذا كان المستخدم مسجل الدخول بالفعل، قم بتوجيهه إلى الصفحة الرئيسية
//     if (token) {
//       navigate("/");
//     }
//   }, [token, navigate]);

//   useEffect(() => {
//     // مسح أي أخطاء سابقة عند تحميل الصفحة
//     return () => {
//       dispatch(clearError());
//     };
//   }, [dispatch]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const result = await dispatch(login({ username, password }));
//     if (login.fulfilled.match(result)) {
//       // إذا نجح تسجيل الدخول، قم بالتوجيه إلى الصفحة الرئيسية
//       navigate("/");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Admin Login</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit" disabled={isLoading}>
//         {isLoading ? "Logging in..." : "Login"}
//       </button>
//     </form>
//   );
// };

// export default Login;
// /////////////////////////////
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { login, clearError } from "../../store/authSlice";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isLoading, error, isAuthenticated } = useSelector(
//     (state) => state.auth
//   );

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate("/");
//     }
//   }, [isAuthenticated, navigate]);

//   useEffect(() => {
//     return () => {
//       dispatch(clearError());
//     };
//   }, [dispatch]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const result = await dispatch(login({ username, password }));
//     if (login.fulfilled.match(result)) {
//       navigate("/");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Admin Login</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit" disabled={isLoading}>
//         {isLoading ? "Logging in..." : "Login"}
//       </button>
//     </form>
//   );
// };

// export default Login;
////////////////////////////
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { login, clearError } from "../../store/authSlice";

// const LoginContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   min-height: 100vh;
//   background-color: #f3f4f6;
// `;

// const LoginCard = styled.div`
//   background-color: white;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   padding: 2rem;
//   width: 100%;
//   max-width: 400px;
// `;

// const Title = styled.h2`
//   font-size: 1.5rem;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 1.5rem;
//   color: #1f2937;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// const InputGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
// `;

// const Label = styled.label`
//   font-size: 0.875rem;
//   font-weight: 500;
//   color: #4b5563;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.5rem;
//   border: 1px solid #d1d5db;
//   border-radius: 4px;
//   font-size: 1rem;

//   &:focus {
//     outline: none;
//     border-color: #3b82f6;
//     box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
//   }
// `;

// const Button = styled.button`
//   background-color: #3b82f6;
//   color: white;
//   font-weight: 500;
//   padding: 0.5rem 1rem;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.2s;

//   &:hover {
//     background-color: #2563eb;
//   }

//   &:disabled {
//     background-color: #9ca3af;
//     cursor: not-allowed;
//   }
// `;

// const ErrorMessage = styled.div`
//   background-color: #fee2e2;
//   border: 1px solid #ef4444;
//   border-radius: 4px;
//   color: #b91c1c;
//   padding: 0.5rem;
//   margin-bottom: 1rem;
// `;

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isLoading, error, isAuthenticated } = useSelector(
//     (state) => state.auth
//   );

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate("/");
//     }
//   }, [isAuthenticated, navigate]);

//   useEffect(() => {
//     return () => {
//       dispatch(clearError());
//     };
//   }, [dispatch]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const resultAction = await dispatch(login({ username, password }));
//       if (login.fulfilled.match(resultAction)) {
//         navigate("/");
//       } else if (login.rejected.match(resultAction)) {
//         console.error("Login failed:", resultAction.error);
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//     }
//   };

//   return (
//     <LoginContainer>
//       <LoginCard>
//         <Title>Admin Login</Title>
//         <Form onSubmit={handleSubmit}>
//           {error && <ErrorMessage>{error}</ErrorMessage>}
//           <InputGroup>
//             <Label htmlFor="username">Username</Label>
//             <Input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </InputGroup>
//           <InputGroup>
//             <Label htmlFor="password">Password</Label>
//             <Input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </InputGroup>
//           <Button type="submit" disabled={isLoading}>
//             {isLoading ? "Logging in..." : "Login"}
//           </Button>
//         </Form>
//       </LoginCard>
//     </LoginContainer>
//   );
// };

// export default Login;
// /////////////////////////////
// // Login.js
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { login, clearError } from "../../store/authSlice";

// const LoginContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   min-height: 100vh;
//   background-color: rgba(243, 244, 246, 0.8);
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   z-index: 1000;
// `;

// const LoginCard = styled.div`
//   background-color: white;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   padding: 2rem;
//   width: 100%;
//   max-width: 400px;
// `;

// const Title = styled.h2`
//   font-size: 1.5rem;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 1.5rem;
//   color: #1f2937;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// const InputGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
// `;

// const Label = styled.label`
//   font-size: 0.875rem;
//   font-weight: 500;
//   color: #4b5563;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.5rem;
//   border: 1px solid #d1d5db;
//   border-radius: 4px;
//   font-size: 1rem;

//   &:focus {
//     outline: none;
//     border-color: #3b82f6;
//     box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
//   }
// `;

// const Button = styled.button`
//   background-color: #3b82f6;
//   color: white;
//   font-weight: 500;
//   padding: 0.5rem 1rem;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.2s;

//   &:hover {
//     background-color: #2563eb;
//   }

//   &:disabled {
//     background-color: #9ca3af;
//     cursor: not-allowed;
//   }
// `;

// const ErrorMessage = styled.div`
//   background-color: #fee2e2;
//   border: 1px solid #ef4444;
//   border-radius: 4px;
//   color: #b91c1c;
//   padding: 0.5rem;
//   margin-bottom: 1rem;
// `;

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isLoading, error, isAuthenticated } = useSelector(
//     (state) => state.auth
//   );

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate("/");
//     }
//   }, [isAuthenticated, navigate]);

//   useEffect(() => {
//     return () => {
//       dispatch(clearError());
//     };
//   }, [dispatch]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const resultAction = await dispatch(login({ username, password }));
//       if (login.fulfilled.match(resultAction)) {
//         navigate("/");
//       } else if (login.rejected.match(resultAction)) {
//         console.error("Login failed:", resultAction.error);
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//     }
//   };

//   return (
//     <LoginContainer>
//       <LoginCard>
//         <Title>Admin Login</Title>
//         <Form onSubmit={handleSubmit}>
//           {error && <ErrorMessage>{error}</ErrorMessage>}
//           <InputGroup>
//             <Label htmlFor="username">Username</Label>
//             <Input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </InputGroup>
//           <InputGroup>
//             <Label htmlFor="password">Password</Label>
//             <Input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </InputGroup>
//           <Button type="submit" disabled={isLoading}>
//             {isLoading ? "Logging in..." : "Login"}
//           </Button>
//         </Form>
//       </LoginCard>
//     </LoginContainer>
//   );
// };

// export default Login;
////////////////
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login, clearError } from "../../store/authSlice";

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: rgba(243, 244, 246, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
`;

const LoginCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
  color: black; /* تغيير اللون إلى الأسود */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: black; /* تغيير اللون إلى الأسود */
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 1rem;
  color: black; /* تغيير لون الخط إلى الأسود */

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
  }
`;

const Button = styled.button`
  background-color: #3b82f6;
  color: white;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563eb;
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  background-color: #fee2e2;
  border: 1px solid #ef4444;
  border-radius: 4px;
  color: #b91c1c; /* الإبقاء على لون الخط في رسالة الخطأ */
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(login({ username, password }));
      if (login.fulfilled.match(resultAction)) {
        navigate("/");
      } else if (login.rejected.match(resultAction)) {
        console.error("Login failed:", resultAction.error);
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Title>Admin Login</Title>
        <Form onSubmit={handleSubmit}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <InputGroup>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </Form>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
