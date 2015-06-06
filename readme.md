Read data from gzip, parse to JSON and store in Mongo. Routes provide access to run curl queries against the data.

Todo:
  1. Flesh out tests to cover content
  2. More routes to cover different query actions on the data
  3. Pull data load process out of app.js and run it from command line to prevent multiple data loads
  4. Re-format time stamps to correct format
  5. Change mongoose schema to better fit data types expected
  6. Fix logic in the dataEntry model in log-data.js. Currently it concatenates strings to form data chunks which might cause errors with anomalous data.
