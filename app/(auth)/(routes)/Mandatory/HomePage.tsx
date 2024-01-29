import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <div className="MainPageContainer" id="page">
        <div className="Discord-Channel">
          <div className="Left-Banner">
            <div className="Channel-icon">
              <div className="Channel-Logo">
                <div className="NoLine"></div>
                <img src="DiscordHmm.png"></img>
              </div>
            </div>
            <div className="Channel-icon">
              <div className="Channel-Logo">
                <div className="whiteLine"></div>
              </div>
            </div>
          </div>
          <div className="Channel-Banner">
            <div className="Filter-Container">
              <div className="Filter-Home">Find or start a conversation</div>
            </div>
            <div className="Mandatory-Content">
              <div className="Channel-Contents">
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
                Friend
              </div>
              <div className="Channel-Contents">
                <svg className="Channel-Content-Icon">
                  <path
                    fill="currentColor"
                    d="M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                  ></path>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z"
                  ></path>
                </svg>
                Nitro
              </div>
              <div className="Channel-Contents">
                <svg className="Channel-Content-Icon">
                  <path
                    fill="currentColor"
                    d="M1.16 5.02c-.1.28.04.58.29.74l10.27 6.85a.5.5 0 0 0 .56 0l10.27-6.85c.25-.16.38-.46.29-.74A3 3 0 0 0 20 3H4a3 3 0 0 0-2.84 2.02Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M23 8.8a.5.5 0 0 0-.78-.41l-9.53 6.35c-.42.28-.96.28-1.38 0L1.78 8.39A.5.5 0 0 0 1 8.8V18a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V8.8Z"
                  ></path>
                </svg>
                Message Requests
              </div>
              <div className="Channel-Contents">
                <svg className="Channel-Content-Icon">
                  <path
                    fill="currentColor"
                    d="M2.63 4.19A3 3 0 0 1 5.53 2H7a1 1 0 0 1 1 1v3.98a3.07 3.07 0 0 1-.3 1.35A2.97 2.97 0 0 1 4.98 10c-2 0-3.44-1.9-2.9-3.83l.55-1.98ZM10 2a1 1 0 0 0-1 1v4a3 3 0 0 0 3 3 3 3 0 0 0 3-2.97V3a1 1 0 0 0-1-1h-4ZM17 2a1 1 0 0 0-1 1v3.98a3.65 3.65 0 0 0 0 .05A2.95 2.95 0 0 0 19.02 10c2 0 3.44-1.9 2.9-3.83l-.55-1.98A3 3 0 0 0 18.47 2H17Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M21 11.42V19a3 3 0 0 1-3 3h-2.75a.25.25 0 0 1-.25-.25V16a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v5.75c0 .14-.11.25-.25.25H6a3 3 0 0 1-3-3v-7.58c0-.18.2-.3.37-.24a4.46 4.46 0 0 0 4.94-1.1c.1-.12.3-.12.4 0a4.49 4.49 0 0 0 6.58 0c.1-.12.3-.12.4 0a4.45 4.45 0 0 0 4.94 1.1c.17-.07.37.06.37.24Z"
                  ></path>
                </svg>
                Shop
              </div>
            </div>
            <div className="PrivateChannel">
              <div className="PrivateChannelHeader">
                DIRECT MESSAGES
                <div className="AddDM">
                  <div className="Cross"></div>
                  <div className="Cross"></div>
                </div>
              </div>
              <div className="PrivateChannelContent">
                <div className="Channel-Contents">
                  <img className="User-Image"></img>
                  <p className="Username-Private">
                    Name
                  </p>
                  <div className="PrivateCancel">
                    <svg></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Content-Banner"></div>
        </div>
      </div>
    </>
  );
}