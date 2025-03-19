// Given a logMessage function below, which we are calling  in safeLog function, how will you make safeLog function typesafe such that safelog function 
// also receives same arugment as logMessage function? (NOTE: you are not allowed to modifiy anything in logMessage function. not even a type)
function logMessage(level: "info" | "error", message: string) {
    console.log(`[${level.toUpperCase()}] ${message}`);
  }
  type logMessageParam = Parameters<typeof logMessage>
  function safeLog<T extends logMessageParam>(...args:T) {
    logMessage(args[0],args[1]);
  }
  
  safeLog("error","inshiya")