import {createContext} from 'react';
import {IFields} from '../components/Form';

export interface IFormContext {
  registerField: (argv: IFields) => void;
}

const FormContext = createContext<IFormContext>({} as IFormContext);

export default FormContext;
