// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Research papers and preprints.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Selected research and engineering projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Resume and CV of Haonan Jian.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-started-as-a-research-assistant-on-the-doc2agent-project-at-brandeis-university",
          title: 'Started as a research assistant on the Doc2Agent project at Brandeis University.',
          description: "",
          section: "News",},{id: "news-received-the-jerome-a-schiff-undergraduate-fellowship-at-brandeis-university",
          title: 'Received the Jerome A. Schiff Undergraduate Fellowship at Brandeis University.',
          description: "",
          section: "News",},{id: "news-joined-neurips-2025-mindgames-challenge",
          title: 'Joined NeurIPS 2025 MindGames Challenge',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-received-the-provost-s-summer-undergraduate-research-fellowship-at-brandeis-university",
          title: 'Received the Provost’s Summer Undergraduate Research Fellowship at Brandeis University.',
          description: "",
          section: "News",},{id: "projects-mindgames-arena-agent-neurips-2025-challenge",
          title: 'MindGames Arena Agent (NeurIPS 2025 Challenge)',
          description: "LLM agent design for social reasoning and strategic multi-agent gameplay.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-dominion-style-card-game",
          title: 'Dominion-Style Card Game',
          description: "Course project implementing a full card-game engine with testing and CI.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-handshake-employer-recommendation-system",
          title: 'Handshake Employer Recommendation System',
          description: "Prototype recommendation system using employer reviews and similarity ranking.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
