// modify createDataShape type and make it genetric so that it creates shape of {data:... , error:...} as per the received type
// ex.
type CreateDataShape<d,e extends Error = SyntaxError>={
    data:d,
    error:e
    }
     
    type MyShapee=CreateDataShape<string,TypeError> 
    /*
      {data:string, error:TypeError}
    */
      type MyShape=CreateDataShape<boolean,"hi">
      /*
      {data:boolean, error:SyntaxError}
    */
   type MyShapeeee=CreateDataShape<boolean>
  /*
  {data:boolean, error:SyntaxError}
*/