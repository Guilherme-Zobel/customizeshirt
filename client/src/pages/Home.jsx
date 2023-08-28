import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from  '../config/motion'
import { CustomButton } from '../components';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home-container" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headTextAnimation}>
            <h1 className="head-text">
              LET'S <br className="x1:block hidden"/> DO IT.
            </h1>
          </motion.div>
          <motion.div
            {...headContentAnimation}
            className="flex flex-col gap-5 py-8"
          >
            <p className="max-w-xl font-normal text-gray-600 text-base">
              Crie sua camisa única e exclusiva com a
              ferramenta de personalização 3D. <strong> Liberte sua imaginação </strong>{" "}          
              e defina seu próprio estilo.
            </p>
          </motion.div>
            <CustomButton
              type="filled"
              title="Personalizar"
              handleClick={() => state.intro = false}
              customStyles="w-fit px-4 py-2.5 front-bold text-sm"
            />
        </motion.section>
      )
    }
    </AnimatePresence>
  )
}

export default Home