import { Dna, Hourglass, Circles } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => (
  <div className={css.wrapperLoader}>
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </div>
);

export const LoadAdd = () => (
  <Hourglass
    visible={true}
    height="30"
    width="30"
    ariaLabel="hourglass-loading"
    wrapperStyle={{}}
    wrapperClass=""
    colors={['#ffffff', '#d4d6da']}
  />
);

export const SpinerDel = () => (
  <Circles
    height="34"
    width="34"
    color="#4c524c"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
);
