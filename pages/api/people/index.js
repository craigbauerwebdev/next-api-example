/* import { people } from '../../../data'

export default function handler(req, res) {
  res.status(200).json(people)
}
 */

import axios from "axios";

export default function handler(req, res) {
  /* 
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json') 
  res.end(JSON.stringify({ name: 'John Doe' }))
  */
  axios.get("http://tartanweddings.com/wp-json/wp/v2/tartanbook")
    .then((response) => {

      //res.end(JSON.stringify({ name: 'John Doe' }));
      res.end(JSON.stringify(response.data));

      /* res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify([{ name: 'Test Data' }, { name: 'more data'}])) */
    })
    .catch((error) => {
      console.log(error);
    });
}