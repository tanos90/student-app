import { History, Location } from 'history';
import { match } from 'react-router-dom';
import { StudentStore } from 'stores/StudentStore/StudentStore';

export interface AppProps extends React.InputHTMLAttributes<HTMLInputElement> {
  history: History;
  location: Location;
  match: match;
  width: string;
  [propName: string]: any;
}

export interface InjectionContext {
  studentStore: StudentStore;
}

export interface AppStoresProps extends AppProps {
  store: InjectionContext;
}
