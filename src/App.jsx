import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

function App() {
  const navMenu = [
    "iPhone",
    "iPad",
    "services",
    "ios",
    "mac",
    "products",
    "iPhone",
    "iPad",
    "services",
    "ios",
    "mac",
    "products",
  ];

  return (
    <div className="h-screen w-full">
      <div className="hidden md:flex navbar items-center gap-10 absolute z-10 top-7 left-1/2 -translate-x-1/2">
        {navMenu.map((menuItem) => (
          <button
            key={menuItem}
            className="cursor-pointer border-none bg-none text-white text-sm capitalize hover:underline"
          >
            {menuItem}
          </button>
        ))}
      </div>
      <button className="md:hidden space-y-2.5 absolute top-6 left-6">
        <div className="w-[30px] h-[1px] bg-white"></div>
        <div className="w-[30px] h-[1px] bg-white"></div>
      </button>
      <div className="flex flex-col gap-2 items-center text-center absolute top-[116px] left-1/2 -translate-x-1/2 text-white font-['Helvetica']">
        <h3 className="masked w-full whitespace-nowrap text-4xl md:text-7xl tracking-tighter font-bold">
          macbook pro.
        </h3>
        <h5 className="text-xs md:text-base">Oh so pro !</h5>
        <p className="text-center text-xs md:text-sm w-full md:w-2/3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi aperiam
          magnam natus ipsa.
        </p>
      </div>
      <div className="relative top-[30%] md:top-auto w-full h-[50vh] md:h-full">
        <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
          <OrbitControls enableZoom={false} />
          <Environment
            files={[
              "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
            ]}
          />
          <ScrollControls pages={1}>
            <MacContainer />
          </ScrollControls>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
