import "./@me.css";
import HomePage from "../Mandatory/HomePage";
import { UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <HomePage />
      <div className="FriendsContainer">
        <div className="FriendsTop">
          <div className="FriendsLogo">
            <svg className="Channel-Content-Icon">
              <path
                fill="currentColor"
                d="M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
              ></path>
              <path
                fill="currentColor"
                d="M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z"
              ></path>
            </svg>
            Friends
          </div>
          <div className="line"></div>
          <div className="FriendsButtonGroup">
            <button className="FriendsButton">Online</button>
            <button className="FriendsButton">All</button>
            <button className="FriendsButton">Pending</button>
            <button className="FriendsButton">Blocked</button>
            <button className="Button-green">Add Friend</button>
          </div>
          <div className="InfomativeSection">
            <svg className="Channel-Content-Icon">
              <path
                d="M19 14a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z"
                fill="currentColor"
              ></path>
              <path
                d="M20.76 12.57c.4.3 1.23.13 1.24-.37V12a10 10 0 1 0-18.44 5.36c.12.19.1.44-.04.61l-2.07 2.37A1 1 0 0 0 2.2 22h10c.5-.01.67-.84.37-1.24A3 3 0 0 1 15 16h.5a.5.5 0 0 0 .5-.5V15a3 3 0 0 1 4.76-2.43Z"
                fill="currentColor"
              ></path>
            </svg>
            <svg className="Channel-Content-Icon">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-2.65c-.5 0-.85.5-.85 1a3 3 0 1 1-6 0c0-.5-.35-1-.85-1H5.5A1.5 1.5 0 0 1 4 11.5v-6Z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg className="Channel-Content-Icon">
              <circle cx="12" cy="12" r="10" fill="transparent"></circle>
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-.28-16c-.98 0-1.81.47-2.27 1.14A1 1 0 1 1 7.8 7.01 4.73 4.73 0 0 1 11.72 5c2.5 0 4.65 1.88 4.65 4.38 0 2.1-1.54 3.77-3.52 4.24l.14 1a1 1 0 0 1-1.98.27l-.28-2a1 1 0 0 1 .99-1.14c1.54 0 2.65-1.14 2.65-2.38 0-1.23-1.1-2.37-2.65-2.37ZM13 17.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div className=" mt-1 mr-2">
                <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
        <div className="FriendsContent">
          <div className="FriendsFilter"></div>
          <div className="FriendsActive"></div>
        </div>
      </div>
    </>
  );
}
