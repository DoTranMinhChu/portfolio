import { IProject } from "@/interfaces/iProject.interface";

const projectsList: IProject[] = [
    {
        name: "Tingle",
        slug: "tingle",
        appType: "A matching application.",
        thumnailUrl: "/image/portfolio/tingle-001.png",
        technologies: [
            {
                name: "React JS",
                isMyPosition: false
            },
            {
                name: "Flutter",
                isMyPosition: false
            },
            {
                name: "Kotlin Spring Boot",
                isMyPosition: true
            }
        ],
        projectType: "Outsource Hitek Software",
        teamSize: {
            Backend: 1,
            Frontend: 1,
            Mobile: 2,
            Fullstack: 0
        },
        position: "Backend",
        shortDescription: `
        <p>The dating application is designed to connect individuals of opposite gender seeking romantic relationships. It features matching algorithms, video calls between male and female users, and a point-based system where male users pay points while female users earn points for video calls. Points earned on the app can be exchanged for money. These features encourage engagement, balanced gender ratios, and incentivize users to remain active on the platform.</p>
        `,
        fullDesciption: `
        <p>&nbsp;The dating application is designed to facilitate <strong>connections between individuals of the opposite gender</strong> who are seeking romantic relationships. The app offers several features to help users find potential partners and interact with them, including <strong>matching</strong>, <strong>video calls</strong>, and a <strong>bonus-point system</strong>.</p>
        <p><br></p>
        <p>&nbsp;The video call feature allows users to have <strong>virtual face-to-face interactions</strong> with their matches. However, there is a catch - <strong>male users</strong> must <strong>spend points</strong> to initiate a <strong>video call</strong>, while <strong>female users&nbsp;</strong>can <strong>earn points</strong> for participating in these calls. This approach is intended to encourage a more balanced gender ratio and incentivize female users to engage with male users on the platform.</p>
        <p><br></p>
        <p>&nbsp;The<strong>&nbsp;bonus-point system</strong> is a unique aspect of this dating application. <strong>Users can earn points</strong> by participating in various activities on the app, such as <strong>completing their profile</strong>, <strong>log in every day</strong>, <strong>engaging with other users</strong>, and <strong>participating in video calls</strong>. These points can then be exchanged for money, providing an additional incentive for users to remain active on the platform.</p>
        <p><br></p>
        <p>&nbsp;Overall, this dating application offers several innovative features to help users find and connect with potential partners. The matching function and video call feature enable users to interact with individuals who share similar interests and preferences, while the point-based system provides an additional incentive for users to engage with the platform and earn rewards.</p>
        `,


    },
    {
        name: "Teamscare",
        slug: "teamscare",
        appType: "A healthcare application.",
        thumnailUrl: "/image/portfolio/teamscare-001.png",
        technologies: [
            {
                name: "React JS",
                isMyPosition: false
            },
            {
                name: "React Native",
                isMyPosition: false
            },
            {
                name: "Express JS",
                isMyPosition: true
            }
        ],
        projectType: "Outsource Hitek Software",
        position: "Backend",
        teamSize: {
            Backend: 1,
            Frontend: 2,
            Mobile: 2,
            Fullstack: 0
        },
        shortDescription: `
        <p>Stay on track with your health goals with our <strong>alarm&nbsp;</strong>function, <strong>meal logging,</strong> <strong>step tracker</strong>, <strong>health challenges</strong>, and <strong>coin rewards</strong>.<strong>&nbsp;Exchange coins for gifts</strong> or other rewards. Download now to take control of your health and achieve your wellness goals!</p>
        `,
        fullDesciption: `
        <p>&nbsp;Application comes packed with features that will motivate and inspire you to make positive changes in your daily routine.</p>
        <p><br></p>
        <p>&nbsp;One of the key features of our application is the <strong>alarm&nbsp;</strong>function, which sends you reminders to take your medication or complete other important health-related tasks. With our alarm, you will never forget to take care of yourself and stay on track with your health goals.</p>
        <p><br></p>
        <p>&nbsp;Our app also includes a meal logging feature that rewards you with coins for<strong>&nbsp;taking photos of your meals</strong>. By logging your meals, you can keep track of your daily caloric intake and make better decisions about your nutrition. Plus, earning coins for logging meals can motivate you to make healthier choices when it comes to food.</p>
        <p><br></p>
        <p>&nbsp;Another feature of our application is the <strong>step tracker</strong>, which rewards you with coins for reaching certain step goals. This feature encourages you to be more physically active and helps you stay on track with your fitness goals.</p>
        <p><br></p>
        <p>&nbsp;You can also <strong>participate in health challenges</strong> to <strong>earn coins</strong>. These challenges may include things like drinking a certain amount of water each day, practicing mindfulness, or getting enough sleep. By completing these challenges, you can earn coins and feel a sense of accomplishment for making healthy choices.</p>
        <p><br></p>
        <p>&nbsp;Finally, the coins you earn through our application can be e<strong>xchanged for gifts or other rewards</strong>. This feature provides additional motivation for you to stay engaged with the app and make healthy choices.</p>
        `,
    },
    {


        name: "PDCard",
        slug: "pdcard",
        appType: "A scheduling application.",
        thumnailUrl: "/image/portfolio/pdcard-001.png",
        technologies: [
            {
                name: "React JS",
                isMyPosition: false
            },
            {
                name: "React Native",
                isMyPosition: false
            },
            {
                name: "Express JS",
                isMyPosition: true
            }
        ],
        projectType: "Outsource Hitek Software",
        position: "Backend",
        teamSize: {
            Backend: 2,
            Frontend: 1,
            Mobile: 2,
            Fullstack: 0
        },
        shortDescription: `
        <p>The scheduling application offers Planner, Time Tracker/Checker, and Scheduler functions, with easy recording and data conversion. It also includes ToDo-List, Check-List, and D-day features to help users reach their goals. The application provides daily, weekly, and monthly progress checks and supports Habit/Daily Tracker for creating and monitoring habits. It also offers a Diary feature, Check monthly records, Search function, Note, and Instagram-like self-development tracking.</p>
        `,
        fullDesciption: `
        <p>Application offers a range of functions that will help you stay on top of your schedule, increase productivity, and reach your goals.</p>
        <p><br></p>
        <p>With <strong>Planner</strong>, <strong>Time Tracker</strong>/<strong>Checker</strong>, and <strong>Scheduler</strong>, you can easily record and manage your time. Our unique <strong>Drag&amp;Click</strong> feature allows you to record your time in 10-minute increments, making data conversion a breeze.</p>
        <p><br></p>
        <p>With <strong>Todo-List&nbsp;</strong>and <strong>Check-List&nbsp;</strong>features will help you stay organized and on top of your tasks. Additionally, <strong>D-day</strong> feature for all to-dos will keep you motivated and help you reach your goals.</p>
        <p><br></p>
        <p>Application offers <strong>daily</strong>, <strong>weekly</strong>, and <strong>monthly&nbsp;</strong><strong>progress checks</strong>, allowing you to track your progress and stay on target. With easy up and down movement, you can easily adjust your schedule as needed.</p>
        <p><br></p>
        <p>Creating habits has never been easier with our <strong>Habit/Daily Tracker</strong>, which supports grouped habits by time of day with breakfast, lunch, and dinner default settings.With <strong>daily</strong>, <strong>weekly</strong>, <strong>monthly</strong>, and <strong>yearly&nbsp;</strong>progress checks will help you stay on track and <strong>monitor your progress</strong>.</p>
        <p>Finally, application is like the<strong>&nbsp;Instagram of self-development</strong>, allowing you to track your progress and <strong>share your accomplishments with others</strong>.</p>
        `,
    },
    {

        name: "Ahappi",
        slug: "ahappi",
        appType: "A E-commerce application.",
        thumnailUrl: "/image/portfolio/ahappi-001.png",
        projectType: "Outsource Hitek Software",
        technologies: [
            {
                name: "Next JS",
                isMyPosition: false
            },
            {
                name: "React Native",
                isMyPosition: false
            }, {
                name: "Express JS",
                isMyPosition: true
            }
        ],
        position: "Backend",
        teamSize: {
            Backend: 2,
            Frontend: 2,
            Mobile: 2,
            Fullstack: 0
        },
        shortDescription: `
        <p>Ahappi is a user-friendly e-commerce application that provides customers with a diverse range of product lines and comprehensive product information. It offers personalized customer care programs and special deals and promotions to make shopping more enjoyable and affordable. With a streamlined checkout process, Ahappi ensures that customers receive their products in a timely and efficient manner.</p>
        `,
        fullDesciption: `
        <p>Ahappi is an innovative <strong>e-commerce</strong> application that aims to provide customers with a seamless and personalized shopping experience. With its user-friendly interface and diverse range of product lines, Ahappi makes it easier for customers to discover and purchase items that cater to their individual needs and preferences.</p>
        <p><br></p>
        <p>One of the key features of Ahappi is its comprehensive product information system. This system provides customers with detailed descriptions, images, and specifications of each product, ensuring that they are well-informed about their potential purchases. Additionally, Ahappi also offers a variety of customer care programs that provide customers with personalized support and assistance throughout their shopping journey.</p>
        <p><br></p>
        <p>Another advantage of using Ahappi is its special deals and promotions. Customers have many opportunities to buy products at preferential prices, making shopping on the app more affordable and enjoyable. Furthermore, Ahappi&apos;s user-friendly design and streamlined checkout process ensure that customers can easily complete their transactions and receive their products in a timely and efficient manner.</p>
        `,
    },
    {
        name: "WorldLand",
        slug: "wordland",
        appType: "A NFT infomation application.",
        projectType: "Outsource Hitek Software",
        thumnailUrl: "/image/portfolio/findclass-001.png",
        technologies: [
            {
                name: "Next JS",
                isMyPosition: false
            },
            {
                name: "Express JS",
                isMyPosition: true
            },
        ],
        position: "Backend",
        teamSize: {
            Backend: 2,
            Frontend: 2,
            Mobile: 0,
            Fullstack: 0
        },
        shortDescription: `
        <p>Findclass is a user-friendly application that helps students search for online courses based on their preferences. It offers features such as search by demand, time, and forum function to interact with others.&nbsp;</p>
        `,
        fullDesciption: `
        <p>World Land is a comprehensive platform for NFT enthusiasts, providing project and minting information, a community forum, NFT news and guides, and customizable notifications. Whether you are a seasoned collector or new to the world of NFTs, World Land has everything you need to succeed in this exciting space.</p>
        <p><br></p>
        <p><strong>WorldLand </strong>is divided into several sections, each with its own unique features and benefits. In the project NFT information section, you will find detailed information about the latest NFT projects, including their creators, themes, and unique features. Platform keep database up-to-date, so you can be sure that you are getting the latest information about the most exciting NFT projects.</p>
        <p><br></p>
        <p>If you are interested in minting your own NFTs, you can find all the information you need in the minting information section. Here, platform provide step-by-step <strong>guides </strong>on how to mint your own NFTs, including information about the different platforms and tools you can use to create your own digital assets.</p>
        <p><br></p>
        <p><strong>WorldLand </strong>also features a <strong>community </strong>forum where you can connect with other NFT enthusiasts from around the world. You can discuss the latest NFT trends, share your own collections, and learn from others about how to get the most out of your NFT investments.</p>
        <p><br></p>
        <p>In addition to our <strong>community </strong>forum, <strong>Worldland </strong>also provide<strong>&nbsp;NFT news</strong> and <strong>guides </strong>to keep you up-to-date on the latest developments in the world of NFTs. Whether you are looking for information about the latest NFT releases, the best NFT marketplaces, or how to store your NFTs securely, we have got you covered.</p>
        <p><br></p>
        <p>Finally, <strong>WorldLand </strong>offer a notification system that keeps you informed about the latest <strong>NFT projects, events, and news</strong>. You can customize your notifications to receive updates about the topics that interest you the most, so you never miss out on the latest developments in the world of NFTs.</p>
        `,
    },
    {
        name: "Findclass",
        slug: "findclass",
        appType: "A educational application.",
        projectType: "Outsource Hitek Software",
        thumnailUrl: "/image/portfolio/findclass-001.png",
        technologies: [
            {
                name: "Next JS",
                isMyPosition: false
            },
            {
                name: "Express JS",
                isMyPosition: true
            },
        ],
        position: "Backend",
        teamSize: {
            Backend: 2,
            Frontend: 2,
            Mobile: 2,
            Fullstack: 0
        },
        shortDescription: `
        <p>Findclass is a user-friendly application that helps students search for online courses based on their preferences. It offers features such as search by demand, time, and forum function to interact with others.&nbsp;</p>
        `,
        fullDesciption: `
        <p>The <strong>Findclass </strong>application is a user-friendly platform designed to help students search for online <strong>classes </strong>based on their preferences. With this application, users can easily search for courses by <strong>demand</strong>, <strong>time</strong>, and<strong>&nbsp;other criteria</strong>.</p>
        <p><br></p>
        <p>One of the key features of the application is the <strong>forum </strong>function, which enables users to interact with each other, share their experiences and knowledge, and exchange ideas. This feature creates a supportive learning environment for students, and encourages active participation and engagement.</p>
        <p><br></p>
        <p>The application is not only useful for students but also for administrators, who have access to various management functions. They can <strong>manage classes, teachers, and students, as well as handle feedback</strong> management and other administrative tasks.</p>
        <p><br></p>
        <p>Overall, the <strong>Findclass </strong>application is an innovative tool that provides a seamless and efficient way for students to find and enroll in online courses, while also offering a range of management functions to administrators.</p>
        `,
    }

]

export { projectsList }