import { History, Location } from 'history';
import { match } from 'react-router-dom';
import { StudentStore } from 'stores/StudentStore/StudentStore';

export interface AppProps {
  history?: History;
  location?: Location;
  match?: match;
  width?: string;
}

export interface InjectionContext {
  studentStore: StudentStore;
}

export interface AppStoresProps extends AppProps {
  store: InjectionContext;
}
