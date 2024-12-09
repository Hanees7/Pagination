import axios from "axios";
import React, { lazy } from "react";
import Pagi from "./Components/Pagi";
// import { Suspense } from "react";

const App = () => {
  // const [data, setData] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const respo = await axios.get(
  //         "per/g27/pub/32874/touchstone/AssessmentQPHTMLMode1//32874O2469/32874O2469S24D61049/17321978804444756/2201058219_32874O2469S24D61049E3.html#"
  //       );
  //       console.log("respo", respo);
  //     } catch (error) {
  //       console.error("Error Aa rha hai", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  // console.log(!"hanees"); // false
  // console.log(+false); // 0
  // console.log("" == false); //true
  // console.log("" === false); //false
  // console.log(NaN == NaN); // false
  // console.log(NaN === NaN); //false
  // console.log(1 * undefined); //NaN

  // console.log(typeof typeof 1000); //string
  // const arr = [1, 2, 3]
  // arr[10] = 90
  // console.log(arr); //total index 9

  // const myFx = () => {
  //    x = 10;
  //   console.log(x);
  // };
  // console.log(myFx());
  // function myFx(){
  //    x = 10;
  //   console.log(x);
  // };
  // console.log(myFx());

  // var x = abc
  // var abc = 100
  // console.log(x);

  // const data ={
  //   name : "hane"
  // }
  //  const arr =[1, 2]
  //  console.log(delete data); //false
  //  console.log(delete arr); //false
  //  console.log(delete arr[1]); //true

  // const Abc = [1, 2, 3]
  // const [x, y] = Abc
  // console.log(x, y);

  // const a =[]
  // const B =[]
  // console.log(a == B); //false
  // console.log(a === B); //false
  // const Lazzy = lazy(()=>import("./Components/Lazzy"))
  return (
    <>
      {/* <div>
        <h1>This Is lazy loading</h1>
      </div>
      <Suspense fallback={<div>loading Data...</div>}>
        <Lazzy />
      </Suspense> */}

      {/* <div>
        This is APP.JSX
      </div> */}
      <Pagi/>
    </>
  );
};

export default App;
