export const responsePlaceholder = 'Your response will appear here . .';

export const variablesPlaceholder = `{
  "characterName": "Rick",
  "locationId": 1,
}`;

export const headersPlaceholder = `{"Content-Type": "application/json"}`;

export const operationPlaceholder = 'Enter your request';

export const operationValue = `query {
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
