## Data structure

blog:
    id: ""
    title: ""
    cover_image: {
        link: ""
        alt: ""
    }
    date: ""
    summary: ""
    entries:
        [
            {
                name: "",
                text: ["", ""],
                images: [
                    {
                        link: "",
                        alt: "",
                        paragraph_key: int
                    }
                ],
            }
        ]
    
## Features

- Translate to English button with voice if possible.

## Components

- Banner image
- Page title
- Welcome to blog
    - Topic icons
    - Topic titles
- About us
    - Profile pic
    - Name
    - Summary (what we write about)
    - 5 hobbies
    - Contact
    - Other links
- Latest blog big
    - Photo
    - Title
    - Date
    - Snippet
- Search/view blogs
    - Search bar (common topics - country, hobby)
    - Sort filter (date, chronological/reverse, search by week)
    - Grid or chronological view results
        - Blog summary
            - Photo
            - Title
            - Date
            - Snippet
            - Read more button
- Blog page/popup

- BannerImage
- Title
- Subtitle
- IconCard (icon and title)
- BlogSummary (feature toggle for latest/grid)
- Blog
- Button
- SearchBar
- SortFilter

- App
    - Base
        - Home
        - About
        - Latest
        - Blogs