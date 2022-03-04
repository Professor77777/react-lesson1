import React from "react";
import Loader, { Plane } from "react-loader-spinner";

const showLoader = (props) => {
  //   const { spinnerLoading } = props;
  const spinLoader = (spinnerLoading) => {
    props.spinnerLoader(spinnerLoading);
  };

  return (
    <div>
      <Plane type="Plane" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default showLoader;

// const Navbar = (props) => {
//   const changeStatus = (status) => {
//     props.handleStatus(status);
//   };
//   return (
//     <div className={styles.nav}>
//       <ul>
//         <li>
//           <a className={styles.active} href="#">
//             Home
//           </a>
//         </li>
//         <li onClick={() => changeStatus("users")}>
//           <a href="#">Users</a>
//         </li>
//         <li onClick={() => changeStatus("posts")}>
//           <a href="#">Posts</a>
//         </li>
//       </ul>
//     </div>
//   );
// };
