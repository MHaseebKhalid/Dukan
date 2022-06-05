/* eslint-disable prettier/prettier */
import {
    createSlice,
    createAsyncThunk,
    getDefaultMiddleware,
  } from '@reduxjs/toolkit';
  const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false,
  });

  import Realm from 'realm';
  let realm = new Realm({ path: 'UserDatabase.realm' });
  let ID=0;

  let register_user = (payload) => {
    var user_details = realm
    .objects('user_details')
    .filtered('user_contact =' + payload.number);

    if(user_details[0].user_contact!==payload.number){
          realm.write(() => {
             ID = realm.objects('user_details').sorted('user_id', true).length > 0

                ? realm.objects('user_details').sorted('user_id', true)[0]

                    .user_id + 1

                : 1;

            realm.create('user_details', {
              user_id: ID,
              user_fullname: payload.name,
              user_contact: payload.number,
              user_email: payload.email,
              logged_in:false,
            });

         return true;

          });

          return ({
            user_id: ID,
            user_fullname: payload.name,
            user_contact: payload.number,
            user_email: payload.email,
            logged_in:false,
          });
        }
        else{
          alert("Phone number already in use")
        }

  };


  let loginUserFun=(payload)=>{
    var user_details = realm
    .objects('user_details')
    .filtered('user_contact =' + payload.number);

    user_details[0].logged_in = true;

    return user_details[0];
  }

  let logOutrFun=(payload)=>{
    var user_details = realm
    .objects('user_details')
    .filtered('user_contact =' + payload.number);

    user_details[0].logged_in = false;

    return user_details;
  }


  export const registerUser = createAsyncThunk(
    'user/register',
    async (payload) => {
       try {
        const user = await register_user(payload);
        return user;
      } catch (err) {
        throw err.message == 'Network Error' ? err?.message : err?.response?.data;
      }
    }
  );

  export const loginUser = createAsyncThunk(
    'user/login',
    async (payload) => {
       try {
        const user = await loginUserFun(payload);
        console.log("Successfully logged in!", user);
        return user;
      } catch (err) {
        console.error("Failed to log in", err.message);
        throw err.message == 'Network Error' ? err?.message : err?.response?.data;
      }
    }
  );
  

  export const logOutUser = createAsyncThunk(
    'user/login',
    async (payload) => {
       try {
        const user = await logOutrFun(payload);
        return user;
      } catch (err) {
        throw err.message == 'Network Error' ? err?.message : err?.response?.data;
      }
    }
  );
  
  const authSlice = createSlice({
    name: 'auth',
    initialState: {
      userData: null,
      loading: false,
      error: '',
    },
    reducers: {
    
    },
    extraReducers: {

      //register
      [registerUser.fulfilled]: (state, action) => {
        state.loading = false;
      },
      [registerUser.pending]: (state, action) => {
        state.loading = true;
      },
      [registerUser.rejected]: (state, action) => {
        state.loading = false;
      },

       //login
       [loginUser.fulfilled]: (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      },
      [loginUser.pending]: (state, action) => {
        state.loading = true;
      },
      [loginUser.rejected]: (state, action) => {
        state.loading = false;
      },

        //logOut
        [logOutUser.fulfilled]: (state, action) => {
          state.loading = false;
          state.userData = null;
        },
        [logOutUser.pending]: (state, action) => {
          state.loading = true;
        },
        [logOutUser.rejected]: (state, action) => {
          state.loading = false;
        },
    },
  });
  
  // export const { logOut } = authSlice.actions;
  export default authSlice.reducer;