const indexFuncTemp = (name: string) => {
  return `
import ${name} from './${name}';

export default ${name};
    `.trimStart();
};
export default indexFuncTemp;
