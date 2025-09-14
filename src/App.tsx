import ConfettiEffect from "./components/ConfettiEffect";
import TypewriterText from "./components/TypewriterText";
import BirthdayCard from "./components/BirthdayCard";
import Balloons from "./components/Balloons";


function App() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-blue-200 via-cyan-200 to-yellow-100 overflow-hidden p-20">
      <Balloons />
      <ConfettiEffect />
      <div className="space-y-6">
        <TypewriterText />
        <div className="flex items-start justify-center  bg-none">
        <BirthdayCard />
      </div>
      </div>
    </div>
  );
}

export default App;
