
import { Suspense } from "react";
import Counter from "./components/Counter";
import SlowComponent from "./components/SlowComponent";

export default function Home() {
return (
 <div>
   <h2>exercise_2</h2>

 <Counter/>

 {/* silodatada  */}
 <Suspense fallback={<p>sloading.....</p>}>
 <SlowComponent/>
 </Suspense>
 </div>
)
}
