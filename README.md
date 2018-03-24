# restifyAPITest

Clone the repo to your local, npm install all dependencies,
Start the server by : npm start or npm run dev
For test purpose, use following curl command as an example:
curl -d '{"payload": [{"address": {"buildingNumber": "28", "lat": -33.912542000000002, "lon": 151.00293199999999, "postcode": "2198", "state": "NSW", "street": "xxxxxxxxxx", "suburb": "Georges Hall"}, "propertyTypeId": 3, "readyState": "init", "reference": "aqsdasd", "shortId": "6Laj49N3PiwZ", "status": 0, "type": "htv", "workflow": "pending"}, {"address": {"buildingNumber": "Level 6", "postcode": "2060", "state": "NSW", "street": "146 Arthur Street", "suburb": "North Sydney"}, "propertyTypeId": 3, "readyState": "init", "reference": "asdasd", "shortId": "E9eQVYEMkub2", "status": 4, "type": "htv", "valfirm": null, "workflow": "completed"}]}' -H "Content-Type: application/json" -X POST http://localhost:8080 -o curl-output.json

For invalid JSON, it will send out "Could not decode request: JSON parsing failed" error.
If valid JSON, but there is some fields missing according to the request sample, there will be a different error message sent out.
If using above curl command, the output will be curl-output.json
