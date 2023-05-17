export const responsePlaceholder = `{
  "data": {
    "characters": {
      "info": {
        "count": 107
      },
      "results": [
        {
          "name": "Mechanical Rick"
        },
        {
          "name": "Mega Fruit Farmer Rick"
        },
        {
          "name": "Morty Rick"
        },
        {
          "name": "Pickle Rick"
        },
        {
          "name": "Plumber Rick"
        },
        {
          "name": "Quantum Rick"
        },
        {
          "name": "Regional Manager Rick"
        },
        {
          "name": "Reverse Rick Outrage"
        },
        {
          "name": "Rick D. Sanchez III"
        },
        {
          "name": "Rick Guilt Rick"
        },
        {
          "name": "Rick Prime"
        },
        {
          "name": "Rick D-99"
        },
        {
          "name": "Rick D716"
        },
        {
          "name": "Rick D716-B"
        },
        {
          "name": "Rick D716-C"
        },
        {
          "name": "Rick Sanchez"
        },
        {
          "name": "Rick J-22"
        },
        {
          "name": "Rick K-22"
        },
        {
          "name": "Rick Sanchez"
        },
        {
          "name": "Ricktiminus Sancheziminius"
        }
      ]
    },
    "location": {
      "id": "1"
    },
    "episodesByIds": [
      {
        "id": "1"
      },
      {
        "id": "2"
      }
    ]
  }
}`;

export const variablesPlaceholder = `{
  "characterName": "Rick",
  "locationId": 1,
  "episodeIds": [1, 2]
}`;

export const headersPlaceholder = `{"Content-Type": "application/json"}`;

export const operationPlaceholder = `query {
  characters(page: 2, filter: { name: "rick" }) {
      info {
          count
      }
      results {
          name
      }
  }
  character(id: 1) {
      id
  }
}`;
