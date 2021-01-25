import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import {Alert} from 'react-native';
import dot from 'dot-object';
import FormContext from '../../contexts/FormContext';

import CreateUserService from '../../../services/CreateUserService';
import {databaseClient} from '../../../providers/DatabaseClient';

import {IPickerRef} from '../Dropdown';
import {ITextInputRef} from '../Input';


export interface IFields {
  name: string;
  ref: ITextInputRef | IPickerRef;
}

interface IDataField {
  [key: string]: string | number;
}

export interface IFormHandles {
  getSubmitData: () => void;
}

export interface IFromProps {
  ref: React.RefObject<IFormHandles>;
  children: React.ReactNode;
}

interface IPropsDataArray {
  avatarLink: string;
  biography: string;
  email: string;
  name: string;
}

const Form: React.ForwardRefRenderFunction<IFormHandles, IFromProps> = (
  {children},
  ref,
) => {
  const [fieldArray, setFieldArray] = useState<IFields[]>([]);

  const registerField = useCallback((field: IFields) => {
    setFieldArray((oldValues) => [...oldValues, field]);
  }, []);

  const getDataField = useCallback((fieldArray: IFields[]) => {
    const dataField: IDataField = {} as IDataField;

    fieldArray.forEach(({name, ref}) => {
      dataField[name] = ref.value;
    });

    return dataField;
  }, []);

  const dataFieldToJson = useCallback((dataField: IDataField) => {
    const jsonData = dot.object(dataField);
    return jsonData;
  }, []);

  const getSubmitData = useCallback(async () => {
    const dataField = getDataField(fieldArray);
    const parsedDataArray: IPropsDataArray = dataFieldToJson(dataField);

    try {
      const createUser = new CreateUserService(databaseClient);

      await createUser.execute({
        avatarLink: parsedDataArray.avatarLink,
        biography: parsedDataArray.biography,
        email: parsedDataArray.email,
        name: parsedDataArray.name,
      });
    } catch (error) {
      console.error('Error: ', error.message);
      Alert.alert('Error: ', error.message);
    }
  }, [fieldArray, getDataField, dataFieldToJson]);

  useImperativeHandle(ref, () => ({getSubmitData}));

  return (
    <FormContext.Provider value={{registerField}}>
      {children}
    </FormContext.Provider>
  );
};

export default forwardRef(Form);
