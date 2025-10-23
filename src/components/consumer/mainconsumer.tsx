import Metalinks from './metalinks';
import Header from './header';
import Insights from './insights';
import Results from './results';
import Multitextindustries from './multitextindustries';
import Logos from './logos';
import Multitextsolution from './multitextsolutions';
import Fullimagetestominal from './fullimagetestominal';
import Multitextapproach from './mutitextapproach';
import Logocarousel from './logocarousel';
import Multitextwork from './multitextwork';
import Singlehero from './singlehero';
export default function Mainconsumer() {
  return (
    <>
  <Metalinks/>
  <Header/>
  <main>
    <Singlehero/>
    <Multitextwork/>
    <Logocarousel/>
    <Multitextapproach/>
   <Fullimagetestominal/>
    <Multitextsolution/>
   <Logos/>
   <Multitextindustries/>
    <Results/>
   <Insights/>
  </main>
  
</>

  )
}
