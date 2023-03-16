import { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

export const useSignIn = () => {
  const [profilePic, setProfilePic] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      const userId = result.user.uid;

      localStorage.setItem("USER", userId);
    } catch (error) {
      console.log(error);
    }
  };

  const fbProvider = new FacebookAuthProvider();
  const FaceBookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, fbProvider);
      // const credantial = await FacebookAuthProvider.credentialFromResult(
      //   result
      // );
      // const token = credantial.accessToken;
      // let photoUrl = result.user.photoURL + "?height=500&access_token=" + token;
      // await updateProfile(auth.currentUser, { photoURL: photoUrl });

      const userId = result.user.uid;

      localStorage.setItem("USER", userId);
    } catch (error) {
      console.log(error);
    }
  };

  return { GoogleLogin, FaceBookLogin };
};
