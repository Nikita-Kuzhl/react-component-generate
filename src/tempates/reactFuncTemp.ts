const reactFuncTemp = (name: string) => {
  return `
import styles from './${name}.module.scss';
const ${name} = () => {
    return (
        <div className={styles.container}>${name}</div>
    )
};
export default ${name};
    `.trimStart();
};
export default reactFuncTemp;
