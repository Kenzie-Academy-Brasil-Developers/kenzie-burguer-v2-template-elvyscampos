import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Api } from '../services/api';


export const UserContext = createContext({} as IUserContext);

interface IDefaultProviderProps {
  children: React.ReactNode;
}

interface IUser {
  id: string;
  name: string;
  email: string;
}

interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  UserLogin: (formData: ILoginFormValues) => Promise<void>;
  UserRegister: (formData: IRegisterFormValues) => Promise<void>;
  userLogout: () => void;
}

export interface IRegisterFormValues {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
}

export interface ILoginFormValues {
  email: string;
  password: string;
}

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  const UserRegister = async (formData: IRegisterFormValues) => {
    try {
      const response = Api.post('/users', formData);
      setUser((await response).data.user);
      localStorage.setItem('@Token', (await response).data.accessToken);
      toast.success('Registro feito com sucesso!')
      navigate('/');
    } catch (error) {
      toast.error('Usúario já cadastrado')
    }
  };

  const UserLogin = async (formData: ILoginFormValues) => {
    try {
      const response = Api.post('/login', formData);
      setUser((await response).data.user);
      localStorage.setItem('@Token', (await response).data.accessToken)
      toast.success('Login Realizado com sucesso!');
      navigate('/shop');
    } catch (error) {
      toast.error('Email ou senha invalido')
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem('@Token');
    console.log("oi")
    navigate('/');
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, UserLogin, UserRegister, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
