import React, { useEffect, useReducer } from "react";
import styles from "./index.module.css";
import Router, { useRouter } from "next/router";
import { setTokenIsThere } from "@/config/redux/reducer/authReducer";
import { useDispatch , useSelector } from "react-redux";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      router.push("/login");
    }
    dispatch(setTokenIsThere());
  });

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.homeContainer}>
          <div className={styles.homeContainer_leftBar}>
            <div
              onClick={() => {
                Router.push("/dashboard");
              }}
              className={styles.sideBardOption}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <p>Home</p>
            </div>
            <div
              onClick={() => {
                Router.push("/Discover");
              }}
              className={styles.sideBardOption}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>

              <p>Discover</p>
            </div>
            <div
              onClick={() => {
                Router.push("/my_connections");
              }}
              className={styles.sideBardOption}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              <p>My Connections</p>
            </div>
          </div>


          <div className={styles.homeContainer_feedContainer}>{children}</div>


          <div className={styles.homeContainer_extraContainer}>
            <h3>Top Profiles</h3>

            {authState.all_profiles_fetched && authState.all_users.map((profile)=>{

              return (
                <div key={profile.id} className={styles._extraContainer_profile}>
                   <p>{profile.userId.name}</p>

                </div>
              )
            })}

          </div>
        </div>
      </div>
    </div>
  );
}
