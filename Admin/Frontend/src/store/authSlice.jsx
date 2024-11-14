// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const login = createAsyncThunk(
//   "auth/login",
//   async ({ username, password }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:4000/api/auth/login",
//         {
//           username,
//           password,
//         }
//       );
//       localStorage.setItem("token", response.data.token);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: null,
//     token: localStorage.getItem("token"),
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     logout: (state) => {
//       localStorage.removeItem("token");
//       state.user = null;
//       state.token = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload.message;
//       });
//   },
// });

// export const { logout } = authSlice.actions;

// export default authSlice.reducer;
// //////////////////////////////////////////////////////////
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const login = createAsyncThunk(
//   "auth/login",
//   async ({ username, password }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:4000/api/auth/login",
//         {
//           username,
//           password,
//         }
//       );
//       localStorage.setItem("token", response.data.token);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data || { message: "An error occurred" }
//       );
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: null,
//     token: localStorage.getItem("token"),
//     isLoading: false,
//     error: null,
//     isAuthenticated: !!localStorage.getItem("token"),
//   },
//   reducers: {
//     logout: (state) => {
//       localStorage.removeItem("token");
//       state.user = null;
//       state.token = null;
//       state.isAuthenticated = false;
//     },
//     clearError: (state) => {
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isAuthenticated = true;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload.message;
//         state.isAuthenticated = false;
//       });
//   },
// });

// export const { logout, clearError } = authSlice.actions;

// export default authSlice.reducer;
// ///////////////////
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const login = createAsyncThunk(
//   "auth/login",
//   async ({ username, password }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:4000/api/auth/login",
//         {
//           username,
//           password,
//         }
//       );
//       localStorage.setItem("AdminToken", response.data.token);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data || { message: "An error occurred" }
//       );
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: null,
//     token: localStorage.getItem("AdminToken"),
//     isLoading: false,
//     error: null,
//     isAuthenticated: !!localStorage.getItem("AdminToken"),
//   },
//   reducers: {
//     logout: (state) => {
//       localStorage.removeItem("AdminToken");
//       state.user = null;
//       state.token = null;
//       state.isAuthenticated = false;
//     },
//     clearError: (state) => {
//       state.error = null;
//     },
//     checkAuthStatus: (state) => {
//       const token = localStorage.getItem("AdminToken");
//       state.isAuthenticated = !!token;
//       state.token = token;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isAuthenticated = true;
//         localStorage.setItem("AdminToken", action.payload.token);
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload.message;
//         state.isAuthenticated = false;
//         localStorage.removeItem("AdminToken");
//       });
//   },
// });

// export const { logout, clearError, checkAuthStatus } = authSlice.actions;

// export default authSlice.reducer;
////////ok up//////////
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        {
          username,
          password,
        }
      );
      localStorage.setItem("AdminToken", response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "An error occurred" }
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("AdminToken"),
    isLoading: false,
    error: null,
    isAuthenticated: !!localStorage.getItem("AdminToken"),
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("AdminToken");
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    checkAuthStatus: (state) => {
      const token = localStorage.getItem("AdminToken");
      state.isAuthenticated = !!token;
      state.token = token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        localStorage.setItem("AdminToken", action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.isAuthenticated = false;
        localStorage.removeItem("AdminToken");
      });
  },
});

export const { logout, clearError, checkAuthStatus } = authSlice.actions;

export default authSlice.reducer;
