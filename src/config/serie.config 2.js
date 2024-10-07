const config = {
  "lang": "en",
  "localPort": "5173",
  "base": "https://lauechev.github.io",
  "baseurl": "/impressionist-paris",
  "title": "Impressionist Paris",
  "subtitle": "A digital collection",
  "credits": "By Laura Echeverri",
  "copyright": "All rights reserved,2024",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "artist ",
        "label": "Artist ",
        "type": "text"
      },
      {
        "key": "year",
        "label": "Year",
        "type": "text"
      },
      {
        "key": "medium",
        "label": "Medium",
        "type": "text"
      }
    ],
    "metadataToIndex": [
      "label",
      "artist ",
      "year",
      "medium",
      "country"
    ]
  }
};
export default config;